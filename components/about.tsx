import { title, subtitle } from "@/components/primitives";
import Image from "next/image";
import profile from "@/assets/profile.jpg";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-8 md:py-12 px-4">
      <section className="flex-1 max-w-2xl" >
        <span className={subtitle()}>INTRODUCTION</span>
        <h2 className={title({ color: "violet" })}>About Me.</h2>
        <p className={subtitle()}>
          I am a Software Engineer based in Davis, CA with a passion for coding and building cool products. I specialize in full-stack development, and I love turning creative ideas into useful, user-friendly experiences.
        </p>
        <br />
        <p className={subtitle()}>
          In my personal life, sports have always been a constant since I was a kid. I started playing basketball at the age of 5 and continued throughout high school and recreationally in college. Lately, I’ve been diving into other sports as well — from the MLB to boxing to the UFC — and I've really come to enjoy the community these sports bring.
        </p>
        <br />
        <p className={subtitle()} >
          When I'm not working, you'll find me playing a game of pickup basketball, working out, or in bed scrolling on TikTok.
        </p>
      </section>

      <Image
        src={profile}
        alt="Profile picture"
        width={400}
        height={400}
        className="rounded-full object-cover"
        style = {{marginTop: 50}}
      />
    </div>
  );
}
