import { title, subtitle } from "@/components/primitives";

export default function AboutPage() {
  return (
    <section className="flex flex-col items-left justify-left gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-left justify-left">
        <span className={title({ color: "violet" })}>About Me</span>
        <br />
        <span className={subtitle()}>
          I am a Software Engineer based in Davis, CA with a passion for coding and building cool products. I specialize in full-stack development, and I love turning creative ideas into useful, user-friendly experiences.
        </span>
        <br />

        <span className={subtitle()}>
          Sports have always been a constant in my life. I started playing basketball at the age of 5 and continued throughout high school and college. Lately, I’ve been diving into other sports as well — from the MLB to UFC — and I've really come to enjoy the players and stories behind the games.
        </span>
        <br />
        <span className={subtitle()}>
          When I'm not working, you'll find me playing a game of pickup basketball, working out, or scrolling on Tiktok in bed.
        </span>
      </div>
    </section>
  );
}
