import Link from "next/link";

export default function GettingStartedPage() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center gap-6 px-6 py-20 text-[var(--foreground)]">
      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Docs</p>
      <h1 className="text-4xl font-semibold">Getting Started</h1>
      <p className="text-slate-600">This page is intentionally empty for now. Content is coming soon.</p>
      <Link href="/" className="text-cyan-300 underline-offset-4 hover:underline">← Back to landing page</Link>
    </main>
  );
}
