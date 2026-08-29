import type { StashEntry } from "./types";

/* ============================================================================
 * ⚠  RYAN — THIS IS THE FILE YOU WRITE.  ⚠
 *
 * Everything else on the site came off your resume. This section didn't,
 * because I don't know it. What's below is scaffolding in your voice, seeded
 * from the couple of lines on your old site (basketball, baseball, UFC,
 * Dodgers, Warriors). Treat it as a shape to overwrite, not copy
 * to keep.
 *
 * HOW TO EDIT
 *   - Add, remove, or reorder entries freely. The UI reads the array length.
 *   - `on`    → the branch it was "stashed on". Flavour text; make it a joke.
 *   - `title` → short, ~4–7 words. Shows on the collapsed row.
 *   - `body`  → 1–3 sentences. This is where the personality goes. Be specific:
 *               "the Warriors' 2022 title run" beats "I like basketball."
 *
 * Nothing else needs to change — StashSection maps over this array.
 * ========================================================================== */

export const stashMeta = {
  /** Line under the section heading. Rewrite this too. */
  intro:
    "Work in progress that has nothing to do with work. Saved off to the side, picked back up on weekends.",
};

export const stash: StashEntry[] = [
  {
    on: "weekends",
    title: "Basketball, played and watched",
    body: "Pickup runs with friends, fantasy leagues, and Stephen Curry. It's the only hobby I have that keeps me relatively in shape.",
  },
  {
    on: "summer",
    title: "Dodgers baseball, all 162",
    body: "Baseball is the sport that rewards paying attention over a long season — the one where a bad week means nothing and a good one means less. Replace this with an actual take.",
  },
  {
    on: "saturday-night",
    title: "UFC fight nights",
    body: "Nothing analytical about it. I just watch. (Your line here — favourite fighter, a card you still think about.)",
  },
  {
    on: "early-mornings",
    title: "Golf, chasing a better round",
    body: "The opposite of pickup basketball: four hours long, entirely self-inflicted, and impossible to blame on anyone else. One good shot a round is somehow enough to book the next tee time.",
  },
];
