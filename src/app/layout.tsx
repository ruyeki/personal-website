import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import { site } from "@/content/site";

const jb = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jb",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  keywords: [
    site.name,
    "Software Engineer",
    "Persist AI",
    "UC Davis",
    "Lab automation",
    "OPC-UA",
    "Applied AI",
    "RAG",
    "Python",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: `${site.name} — Portfolio`,
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.role}`,
    description: site.tagline,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0e13" },
    { media: "(prefers-color-scheme: light)", color: "#fbfaf7" },
  ],
};

/**
 * Runs before first paint so a returning light-mode visitor never sees a dark
 * flash. Dark is the default, so we only ever *add* the class.
 */
const themeScript = `
try {
  if (localStorage.getItem('theme') === 'light') {
    document.documentElement.classList.add('light');
  }
} catch (e) {}
`.trim();

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  worksFor: { "@type": "Organization", name: site.org },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of California, Davis",
  },
  knowsAbout: [
    "Lab Automation",
    "OPC-UA",
    "Applied AI",
    "Retrieval-Augmented Generation",
    "Full-Stack Engineering",
    "Python",
    "TypeScript",
    "React",
  ],
  url: site.url,
  email: `mailto:${site.email}`,
  sameAs: ["https://github.com/ruyeki", "https://www.linkedin.com/in/ruyeki/"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jb.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#status"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-md focus:border focus:border-accent focus:bg-elev focus:px-3 focus:py-2 focus:text-[12.5px] focus:text-fg"
        >
          Skip to content
        </a>
        <Nav />
        <main>{children}</main>
      </body>
    </html>
  );
}
