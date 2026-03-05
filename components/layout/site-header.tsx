"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navLinks, siteConfig } from "@/app/constants/site";

export function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-lg">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-3">
          <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-card-foreground">
            {siteConfig.productName} {siteConfig.versionLabel}
          </span>
        </Link>

        <nav className="flex flex-wrap items-center justify-end gap-4 text-sm">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            const isActive =
              !isExternal &&
              (link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href));
            const linkClasses = isActive
              ? "text-foreground font-semibold"
              : "text-muted-foreground hover:text-foreground";

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`transition-colors ${linkClasses}`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
