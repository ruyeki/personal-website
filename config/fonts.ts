import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Source_Serif_4 as FontSerif,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

// Primary typeface for the site — a classic transitional serif.
export const fontSerif = FontSerif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
