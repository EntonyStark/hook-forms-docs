import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteHeader } from "@/components/layout/site-header";
import { ThemeToggle } from "@/components/ui/theme-toggle";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hook Easy Form — React form state without the baggage",
  description:
    "Hook-native form primitives with microscopic footprint, predictable subscriptions, and batteries-included TypeScript support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--page-text)] transition-colors">
          <div className="pointer-events-none absolute inset-x-0 top-[-10rem] z-0 flex justify-center">
            <div className="h-[28rem] w-[48rem] rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-indigo-500/30 blur-[140px]" />
          </div>
          <SiteHeader />
          <div className="relative z-10">{children}</div>
          <div className="fixed bottom-5 right-5 z-50">
            <ThemeToggle />
          </div>
        </div>
      </body>
    </html>
  );
}
