import Link from "next/link";

import { navLinks, siteConfig } from "@/app/constants/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-3">
          <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-card-foreground">
            {siteConfig.productName} {siteConfig.versionLabel}
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-4 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
