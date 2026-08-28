import type { DiffLine } from "@/content/types";

/**
 * Renders an array of DiffLines as a unified diff.
 *
 * Line numbers are synthesised: `-` lines advance the left counter, `+` lines
 * the right, context advances both — same as a real unified diff, so the
 * gutters stay believable when you edit content.
 *
 * A `ctx` line whose text starts with `@@` renders as a hunk header instead
 * of a normal row.
 */
export default function DiffBlock({
  lines,
  startLeft = 1,
  startRight = 1,
  className = "",
}: {
  lines: DiffLine[];
  startLeft?: number;
  startRight?: number;
  className?: string;
}) {
  let left = startLeft;
  let right = startRight;

  return (
    <div className={`diff ${className}`}>
      {lines.map((line, i) => {
        if (line.k === "ctx" && line.t.startsWith("@@")) {
          left += 1;
          right += 1;
          return (
            <div key={i} className="diff-hunk">
              {line.t}
            </div>
          );
        }

        const ln =
          line.k === "add" ? right++ : line.k === "rem" ? left++ : (left++, right++);

        return (
          <div key={i} className={`diff-row diff-row--${line.k}`}>
            <span className="ln" aria-hidden="true">
              {line.t === "" ? "" : ln}
            </span>
            <span className="sign" aria-hidden="true">
              {line.k === "add" ? "+" : line.k === "rem" ? "−" : ""}
            </span>
            <span className="txt">
              {/* Screen readers get the polarity spelled out; sighted users get colour. */}
              {line.k !== "ctx" && (
                <span className="sr-only">
                  {line.k === "add" ? "Added: " : "Removed: "}
                </span>
              )}
              {line.t === " " || line.t === "" ? " " : line.t}
            </span>
          </div>
        );
      })}
    </div>
  );
}

/** Small +N / −N summary, the thing GitHub puts next to a filename. */
export function DiffStat({ add, rem }: { add: number; rem: number }) {
  const total = Math.max(add + rem, 1);
  const blocks = 5;
  const addBlocks = Math.max(1, Math.round((add / total) * blocks));

  return (
    <span className="inline-flex items-center gap-1.5" title={`${add} additions, ${rem} deletions`}>
      <span className="text-add text-[11px]">+{add}</span>
      <span className="text-rem text-[11px]">−{rem}</span>
      <span className="inline-flex gap-[2px]" aria-hidden="true">
        {Array.from({ length: blocks }, (_, i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-[2px]"
            style={{
              background:
                i < addBlocks ? "var(--add)" : i < blocks ? "var(--rem)" : "var(--border)",
              opacity: i < addBlocks || i < blocks ? 0.85 : 0.4,
            }}
          />
        ))}
      </span>
    </span>
  );
}
