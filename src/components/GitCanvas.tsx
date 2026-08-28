"use client";

import { useEffect, useRef } from "react";

/**
 * Living commit graph behind the page.
 *
 * Three things are happening at once:
 *   1. A static structure — vertical lanes (branches), commit nodes, and
 *      merge curves between adjacent lanes. Regenerated on resize.
 *   2. Packets — bright dots travelling down a lane, i.e. a push. When one
 *      passes a commit node, that node pulses.
 *   3. The cursor is a flashlight. The graph sits at very low alpha by
 *      default and brightens near the pointer, so it never competes with the
 *      content but rewards moving the mouse.
 *
 * Everything reads its colours from the CSS custom properties in globals.css,
 * so the canvas follows the theme toggle without knowing what a theme is.
 *
 * Perf notes: DPR capped at 2, one rAF loop, paused when the tab is hidden,
 * static single frame under prefers-reduced-motion, and no work at all on
 * pointer-coarse devices beyond the initial structure + packets.
 */

type RGB = [number, number, number];

type Node = { y: number; r: number; pulse: number; c: RGB };
type Lane = { x: number; weight: number; nodes: Node[] };
type Merge = { from: number; to: number; y: number; span: number };
type Packet = { lane: number; y: number; vy: number; c: RGB; len: number };

function hexToRgb(raw: string): RGB {
  const h = raw.trim().replace("#", "");
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const n = Number.parseInt(full, 16);
  if (Number.isNaN(n)) return [128, 128, 128];
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

const rgba = (c: RGB, a: number) => `rgba(${c[0]},${c[1]},${c[2]},${a})`;

export default function GitCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const context = el.getContext("2d");
    if (!context) return;

    // Re-bind as fresh non-nullable consts: TS drops the null-narrowing when
    // these are captured by the nested draw/resize closures below.
    const cv: HTMLCanvasElement = el;
    const g: CanvasRenderingContext2D = context;

    const root = document.documentElement;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover)").matches;

    let w = 0;
    let h = 0;
    let lanes: Lane[] = [];
    let merges: Merge[] = [];
    let packets: Packet[] = [];
    let raf = 0;
    let last = 0;
    let spawnIn = 0.6;

    // Pointer state, eased toward the real position so the light trails.
    let tx = -9999;
    let ty = -9999;
    let mx = -9999;
    let my = -9999;

    let P = {
      line: [40, 55, 70] as RGB,
      node: [90, 100, 110] as RGB,
      accent: [245, 165, 36] as RGB,
      add: [86, 211, 100] as RGB,
      branch: [195, 154, 201] as RGB,
      hash: [126, 224, 196] as RGB,
    };

    function readPalette() {
      const s = getComputedStyle(root);
      const get = (name: string, fallback: RGB) => {
        const v = s.getPropertyValue(name);
        return v ? hexToRgb(v) : fallback;
      };
      P = {
        line: get("--border-strong", P.line),
        node: get("--fg-faint", P.node),
        accent: get("--accent", P.accent),
        add: get("--add", P.add),
        branch: get("--branch", P.branch),
        hash: get("--hash", P.hash),
      };
    }

    function build() {
      const gap = w < 640 ? 74 : 108;
      const count = Math.max(3, Math.ceil(w / gap) + 1);

      lanes = [];
      for (let i = 0; i < count; i++) {
        // +0.5 keeps 1px strokes crisp instead of straddling two pixels.
        const x = Math.round(i * gap + gap / 2) + 0.5;
        const nodes: Node[] = [];
        let y = Math.random() * 160 - 80;
        while (y < h + 80) {
          y += 90 + Math.random() * 170;
          const roll = Math.random();
          nodes.push({
            y,
            r: 1.6 + Math.random() * 1.5,
            pulse: 0,
            c: roll > 0.92 ? P.add : roll > 0.84 ? P.hash : P.node,
          });
        }
        // Lanes nearer the centre read as "main" and sit slightly brighter.
        const centreBias = 1 - Math.abs(x - w / 2) / (w / 2);
        lanes.push({ x, weight: 0.55 + centreBias * 0.45, nodes });
      }

      merges = [];
      const mergeCount = Math.round(count * 0.9);
      for (let i = 0; i < mergeCount; i++) {
        const from = Math.floor(Math.random() * (lanes.length - 1));
        merges.push({
          from,
          to: from + 1,
          y: Math.random() * (h + 200) - 100,
          span: 60 + Math.random() * 90,
        });
      }

      packets = [];
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      cv.width = Math.floor(w * dpr);
      cv.height = Math.floor(h * dpr);
      cv.style.width = `${w}px`;
      cv.style.height = `${h}px`;
      g.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }

    function spawnPacket() {
      if (packets.length > 5) return;
      const roll = Math.random();
      packets.push({
        lane: Math.floor(Math.random() * lanes.length),
        y: -60,
        vy: 90 + Math.random() * 120,
        c: roll > 0.72 ? P.hash : roll > 0.5 ? P.add : P.accent,
        len: 70 + Math.random() * 90,
      });
    }

    /** Radius of the cursor flashlight. */
    const R = 310;

    function render(dt: number) {
      g.clearRect(0, 0, w, h);

      // Ease the light toward the pointer.
      if (mx < -1000) {
        mx = tx;
        my = ty;
      } else {
        mx += (tx - mx) * Math.min(1, dt * 6);
        my += (ty - my) * Math.min(1, dt * 6);
      }

      // ---- merge curves ------------------------------------------------
      g.lineWidth = 1;
      for (const m of merges) {
        const a = lanes[m.from];
        const b = lanes[m.to];
        if (!a || !b) continue;
        const midY = m.y + m.span / 2;
        const prox = Math.max(
          0,
          1 - Math.hypot((a.x + b.x) / 2 - mx, midY - my) / (R * 1.2),
        );
        const alpha = 0.1 + prox * 0.45;
        g.strokeStyle = rgba(P.branch, alpha);
        g.beginPath();
        g.moveTo(a.x, m.y);
        g.bezierCurveTo(a.x, m.y + m.span * 0.6, b.x, m.y + m.span * 0.4, b.x, m.y + m.span);
        g.stroke();
      }

      // ---- lanes -------------------------------------------------------
      for (const lane of lanes) {
        const prox = Math.max(0, 1 - Math.abs(lane.x - mx) / R);
        const base = 0.11 * lane.weight;
        const peak = base + 0.9 * prox * prox * lane.weight;

        // Brightness peaks at the cursor's y and falls off to `base`, which
        // is what makes the light feel spherical rather than like a column.
        const grad = g.createLinearGradient(lane.x, my - R, lane.x, my + R);
        grad.addColorStop(0, rgba(P.line, base));
        grad.addColorStop(0.5, rgba(P.line, peak));
        grad.addColorStop(1, rgba(P.line, base));

        g.strokeStyle = grad;
        g.beginPath();
        g.moveTo(lane.x, 0);
        g.lineTo(lane.x, h);
        g.stroke();
      }

      // ---- commit nodes ------------------------------------------------
      for (const lane of lanes) {
        for (const n of lane.nodes) {
          if (n.y < -20 || n.y > h + 20) continue;
          const d = Math.hypot(lane.x - mx, n.y - my);
          const prox = Math.max(0, 1 - d / R);

          if (n.pulse > 0) n.pulse = Math.max(0, n.pulse - dt * 1.6);

          const alpha = 0.14 + prox * prox * 0.85 + n.pulse * 0.5;
          const r = n.r * (1 + prox * 0.5 + n.pulse * 1.1);

          g.fillStyle = rgba(n.c, Math.min(1, alpha));
          g.beginPath();
          g.arc(lane.x, n.y, r, 0, Math.PI * 2);
          g.fill();

          // Hollow ring on the brightest nodes, like a graph's HEAD marker.
          if (prox > 0.55 || n.pulse > 0.3) {
            g.strokeStyle = rgba(n.c, (prox - 0.4) * 0.5 + n.pulse * 0.4);
            g.lineWidth = 1;
            g.beginPath();
            g.arc(lane.x, n.y, r + 3.5 + n.pulse * 3, 0, Math.PI * 2);
            g.stroke();
          }
        }
      }

      // ---- packets (a push travelling down a branch) --------------------
      g.lineWidth = 1.5;
      for (const p of packets) {
        const lane = lanes[p.lane];
        if (!lane) continue;

        const tail = g.createLinearGradient(lane.x, p.y - p.len, lane.x, p.y);
        tail.addColorStop(0, rgba(p.c, 0));
        tail.addColorStop(1, rgba(p.c, 0.55));
        g.strokeStyle = tail;
        g.beginPath();
        g.moveTo(lane.x, p.y - p.len);
        g.lineTo(lane.x, p.y);
        g.stroke();

        g.fillStyle = rgba(p.c, 0.95);
        g.beginPath();
        g.arc(lane.x, p.y, 2.2, 0, Math.PI * 2);
        g.fill();

        // Soft halo.
        const halo = g.createRadialGradient(lane.x, p.y, 0, lane.x, p.y, 16);
        halo.addColorStop(0, rgba(p.c, 0.3));
        halo.addColorStop(1, rgba(p.c, 0));
        g.fillStyle = halo;
        g.beginPath();
        g.arc(lane.x, p.y, 16, 0, Math.PI * 2);
        g.fill();
      }

      // ---- cursor as HEAD, wired to nearby commits ----------------------
      // The strongest bit of mouse feedback: edges reach out to whatever
      // commits are in range, so moving the pointer feels like dragging a
      // ref around the graph rather than just carrying a spotlight.
      if (canHover && mx > -1000 && mx < w + 200) {
        const reach = R * 0.62;
        const near: { x: number; y: number; d: number; c: RGB }[] = [];
        for (const lane of lanes) {
          if (Math.abs(lane.x - mx) > reach) continue;
          for (const n of lane.nodes) {
            const d = Math.hypot(lane.x - mx, n.y - my);
            if (d < reach && d > 6) near.push({ x: lane.x, y: n.y, d, c: n.c });
          }
        }
        near.sort((a, b) => a.d - b.d);

        g.lineWidth = 1;
        for (const n of near.slice(0, 5)) {
          const t = 1 - n.d / reach;
          g.strokeStyle = rgba(P.accent, t * t * 0.5);
          g.beginPath();
          g.moveTo(mx, my);
          g.lineTo(n.x, n.y);
          g.stroke();
        }

        // HEAD marker
        g.strokeStyle = rgba(P.accent, 0.55);
        g.lineWidth = 1.2;
        g.beginPath();
        g.arc(mx, my, 5.5, 0, Math.PI * 2);
        g.stroke();
        g.fillStyle = rgba(P.accent, 0.9);
        g.beginPath();
        g.arc(mx, my, 1.8, 0, Math.PI * 2);
        g.fill();
      }

      // ---- cursor glow --------------------------------------------------
      if (canHover && mx > -1000) {
        const glow = g.createRadialGradient(mx, my, 0, mx, my, R * 0.85);
        glow.addColorStop(0, rgba(P.accent, 0.1));
        glow.addColorStop(0.5, rgba(P.accent, 0.032));
        glow.addColorStop(1, rgba(P.accent, 0));
        g.fillStyle = glow;
        g.fillRect(mx - R, my - R, R * 2, R * 2);
      }
    }

    function step(now: number) {
      const dt = Math.min(0.05, (now - last) / 1000 || 0);
      last = now;

      spawnIn -= dt;
      if (spawnIn <= 0) {
        spawnPacket();
        spawnIn = 0.9 + Math.random() * 2.2;
      }

      for (const p of packets) {
        p.y += p.vy * dt;
        const lane = lanes[p.lane];
        if (lane) {
          for (const n of lane.nodes) {
            if (Math.abs(n.y - p.y) < 6) n.pulse = 1;
          }
        }
      }
      packets = packets.filter((p) => p.y < h + 120);

      render(dt);
      raf = requestAnimationFrame(step);
    }

    function onPointer(e: PointerEvent) {
      tx = e.clientX;
      ty = e.clientY;
    }

    function onLeave() {
      tx = -9999;
      ty = -9999;
    }

    function onVisibility() {
      if (document.hidden) {
        cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf && !reduced) {
        last = performance.now();
        raf = requestAnimationFrame(step);
      }
    }

    readPalette();
    resize();

    // The theme toggle swaps the class on <html>; re-read the palette and
    // recolour existing nodes so the graph follows along.
    const themeObserver = new MutationObserver(() => {
      const before = P;
      readPalette();
      for (const lane of lanes) {
        for (const n of lane.nodes) {
          n.c = n.c === before.add ? P.add : n.c === before.hash ? P.hash : P.node;
        }
      }
      for (const p of packets) {
        p.c = p.c === before.hash ? P.hash : p.c === before.add ? P.add : P.accent;
      }
      if (reduced) render(0);
    });
    themeObserver.observe(root, { attributes: true, attributeFilter: ["class"] });

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    if (canHover) {
      window.addEventListener("pointermove", onPointer, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }

    if (reduced) {
      render(0); // one static frame, no loop
    } else {
      last = performance.now();
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
    />
  );
}
