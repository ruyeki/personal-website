"use client";

import NextLink from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "AI Ryan", href: "/ai-ryan" },
];

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 w-full bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-end gap-7 px-6 py-5 text-lg">
        {links.map((link) => {
          const active =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);

          return (
            <NextLink
              key={link.href}
              className={`underline-offset-8 transition-colors hover:text-foreground ${
                active
                  ? "text-foreground underline decoration-[#c9a36b]"
                  : "text-foreground/55 no-underline"
              }`}
              href={link.href}
            >
              {link.label}
            </NextLink>
          );
        })}
      </div>
    </nav>
  );
};
