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
    "What I'm up to outside of work. Saved off to the side, picked back up on weekends.",
};

export const stash: StashEntry[] = [
  {
    on: "weekends",
    title: "Basketball, played and watched",
    body: "Basketball was my first love, and it gave back more than a jump shot: the best memories of my life and friendships that have lasted well beyond the game.",
    gallery: [
      {
        src: "/basketball-1.png",
        alt: "Ryan and teammates in Wilson basketball jerseys in the gym",
        caption: "Wilson basketball — the summer-league squad.",
      },
      {
        src: "/basketball-2.jpg",
        alt: "Ryan and friends repping Lakers and Kobe jerseys",
        caption: "Kobe day with the guys. Mamba forever.",
      },
      {
        src: "/basketball-3.jpg",
        alt: "Two players in warmups at the Wildcat gym on game day",
        caption: "Game day under the Wildcat Pride banner.",
      },
      {
        src: "/basketball-4.jpg",
        alt: "The team at a long table for a post-game dinner",
        caption: "Team dinners were half the season.",
      },
      {
        src: "/basketball-5.jpg",
        alt: "Full Wilson basketball team photo with the coach",
        caption: "The whole roster — Wilson, one through the bench.",
      },
      {
        src: "/basketball-6.jpg",
        alt: "Friends carrying a teammate outside at night, laughing",
        caption: "Off the court, still a team.",
      },
      {
        src: "/basketball-7.jpg",
        alt: "Players holding tournament trophies on a sunny day",
        caption: "Came home with the hardware.",
      },
    ],
  },
  {
    on: "summer",
    title: "Dodgers baseball, all 162",
    body: "162 games a year, and I'm in for all of them. Baseball rewards paying attention over the long haul — and right now that means watching Shohei Ohtani do things that aren't supposed to be possible in the same uniform I grew up on.",
  },
  {
    on: "saturday-night",
    title: "UFC fight nights",
    body: "Nothing analytical about it. I just watch. Favorite fighter is Islam Makhachev and my favorite card of the year so far was UFC Freedom 250!",
  },
  {
    on: "early-mornings",
    title: "Golf, chasing a better round",
    body: "Something I picked up this year and quickly fell for. It's the hardest sport I've ever played, and that's precisely what I love about it. One pure shot is enough to keep me hooked and booking the next tee time. Still looking to break 100...",
  },
  {
    on: "off-hours",
    title: "Managing a rental property",
    body: "On the side, I run a rental property end to end — listing rooms across Facebook, Zillow, and Roommates.com, giving tours, and interviewing tenants before anyone gets a key. A different kind of problem-solving than code: reading people, not stack traces.",
  },
];
