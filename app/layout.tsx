import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSerif } from "@/config/fonts";
import { Navbar } from "@/components/navbar";

export const metadata: Metadata = {
  title: "Ryan Uyeki",
  description:
    "Ryan Uyeki — Software Engineer. Full-stack and AI/ML, based in Davis, CA.",
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#181715" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning className="scroll-smooth" lang="en">
      <head />

      <body
        className={clsx(
          "min-h-screen bg-background font-serif text-foreground antialiased",
          fontSerif.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="mx-auto w-full max-w-3xl flex-grow px-6">
              {children}
            </main>
            <footer className="mx-auto w-full max-w-3xl px-6 py-10 text-sm text-foreground/40">
              © {new Date().getFullYear()} Ryan Uyeki
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
