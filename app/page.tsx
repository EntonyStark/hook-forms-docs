import Link from "next/link";

import { navLinks, nextStepCards, siteConfig } from "./constants/site";
import { ThemeToggle } from "../components/ui/theme-toggle";

const featureHighlights = [
  {
    title: "Composable primitives",
    description:
      "Model nested objects, arrays, and async flows with the same hooks you already use. No schemas, just React state with sensible helpers.",
    badge: "DX",
  },
  {
    title: "Predictable subscriptions",
    description:
      "Fields subscribe to only what they need, so rerenders stay local even in large dashboards or wizards.",
    badge: "Performance",
  },
  {
    title: "Micro footprint",
    description:
      "Shipping at under 2 kB gzip + zero dependencies, Hook Easy Form fits inside any bundle budget.",
    badge: "1.6 kB",
  },
  {
    title: "Typesafe everywhere",
    description:
      "Infer the exact shape of values, errors, and helpers with first-class TypeScript support.",
    badge: "TS",
  },
  {
    title: "UI-framework agnostic",
    description:
      "Drop into Tailwind, shadcn/ui, Radix, or your in-house design system without adapters.",
    badge: "Design systems",
  },
  {
    title: "Async-ready",
    description:
      "Optimistic updates and deferred validation stay predictable thanks to consistent hooks for promises and transitions.",
    badge: "Async",
  },
];

const workflow = [
  {
    title: "Model your intent",
    description:
      "Declare fields with defaults, validation, and relationships. Hook Easy Form derives everything else.",
    bullets: [
      "Nested objects & arrays",
      "Validation per field or globally",
      "Deterministic error states",
    ],
  },
  {
    title: "Connect UI",
    description:
      "Use helpers like form(\"email\") or list(\"items\") to wire components without prop drilling.",
    bullets: [
      "Subscriptions avoid extra renders",
      "Control vs uncontrolled inputs supported",
      "Works with any component library",
    ],
  },
  {
    title: "Ship with confidence",
    description:
      "Insightful devtools-friendly state helpers expose everything needed for logging or analytics.",
    bullets: [
      "Listen to transitions",
      "Surface pending + dirty flags",
      "Deterministic submit lifecycle",
    ],
  },
];

const metrics = [
  { label: "Bundle size", value: "1.6 kB" },
  { label: "Render isolation", value: "<10 ms diff" },
  { label: "Adoption", value: "45k weekly installs" },
];

const codeSample = `import { useEasyForm } from "hook-easy-form";

const checkoutForm = useEasyForm({
  defaultValues: {
    customer: {
      email: "",
      shippingMethod: "standard",
    },
    items: [{ sku: "starter", qty: 1, price: 29 }],
    coupon: "",
  },
  validate: {
    "customer.email": (value) =>
      value.includes("@") ? null : "A valid email is required",
    items: (rows) =>
      rows.length === 0 ? "Add at least one line item" : null,
  },
  onSubmit(values) {
    return createOrder(values);
  },
});

export function CheckoutEditor() {
  const { form, list, value, setValue, submit, pending } = checkoutForm;

  const applyCoupon = async () => {
    const discount = await validateCoupon(value("coupon"));
    setValue("items", (rows) => rows.map((row) => ({
      ...row,
      price: row.price * (1 - discount.percent / 100),
    })));
  };

  return (
    <form onSubmit={submit()} className="space-y-4">
      <input {...form("customer.email")} placeholder="buyer@acme.com" />

      {list("items").map((row) => (
        <div key={row.key} className="grid grid-cols-3 gap-3">
          <input {...row("sku")} />
          <input {...row.number("qty")} min={1} />
          <input {...row.currency("price")} />
        </div>
      ))}

      <div className="flex gap-2">
        <input {...form("coupon")} placeholder="SPRING25" />
        <button type="button" onClick={applyCoupon}>Apply</button>
      </div>

      <button type="submit" disabled={pending()}>
        {pending() ? "Placing order…" : "Complete checkout"}
      </button>
    </form>
  );
}`;

export default function Home() {
  return (
    <div className="relative overflow-hidden bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-200 transition-colors">
      <div className="pointer-events-none absolute inset-x-0 top-[-10rem] z-0 flex justify-center">
        <div className="h-[28rem] w-[48rem] rounded-full bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-indigo-500/30 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 sm:px-10 lg:px-16 lg:pb-32 lg:pt-20">
        <header className="space-y-10">
          <div className="flex flex-col gap-6 text-sm text-slate-600 dark:text-slate-300 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
                {siteConfig.productName} {siteConfig.versionLabel}
              </span>
              <span className="text-slate-500 dark:text-slate-400">
                The form engine built for hooks-first teams.
              </span>
            </div>
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <nav className="flex flex-wrap gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-slate-600 transition-colors hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 px-4 py-1 text-sm text-slate-900 dark:text-white">
                <span className="text-emerald-300">New</span>
                <span>Reactive arrays & schema-less validation</span>
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
                  Welcome to predictable, hook-native forms.
                </h1>
                <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                  Hook Easy Form gives your team the smallest, most composable primitives for capturing data in React apps.
                  Build confident onboarding flows, pricing configurators, and admin dashboards without babysitting state.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/docs/getting-started"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5"
                >
                  Install &lt;HF /&gt;
                </Link>
                <Link
                  href={siteConfig.links.github}
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-500 dark:border-white/20 dark:text-white dark:hover:border-white"
                >
                  View on GitHub
                </Link>
              </div>
              <dl className="grid gap-6 text-sm sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div key={metric.label}>
                    <dt className="text-slate-500 dark:text-slate-400">{metric.label}</dt>
                    <dd className="text-xl font-semibold text-slate-900 dark:text-white">{metric.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl shadow-blue-500/10">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                DATA FLOW
              </p>
              <pre className="rounded-2xl border border-white/5 bg-black/60 p-5 text-sm leading-relaxed text-slate-100">
                {codeSample}
              </pre>
              <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
                Build realistic ordering and billing workflows with composable helpers, async side effects, and predictable submission lifecycles.
              </p>
            </div>
          </div>
        </header>

        <section className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
              FEATURES
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              Designed for teams shipping ambitious workflows.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {featureHighlights.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.5)] transition hover:-translate-y-1"
              >
                <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700 dark:text-cyan-200">
                  <span className="rounded-full bg-cyan-100 dark:bg-cyan-400/20 px-3 py-1 text-[11px] text-cyan-700 dark:text-cyan-200">
                    {item.badge}
                  </span>
                  <span className="text-slate-500 dark:text-slate-400">Capability</span>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[3fr_2fr]">
          <div className="space-y-8 rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-8 shadow-[0_35px_80px_rgba(15,23,42,0.45)]">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
              workflow
            </p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
              Bring structure without losing velocity.
            </h2>
            <div className="space-y-8">
              {workflow.map((step) => (
                <div key={step.title} className="rounded-2xl border border-slate-200 bg-slate-100 p-5 dark:border-white/10 dark:bg-slate-950/60">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-300">{step.description}</p>
                  <ul className="mt-4 space-y-1 text-sm text-slate-500 dark:text-slate-400">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-200 bg-gradient-to-b from-indigo-100 via-white to-slate-100 p-8 text-slate-900 dark:border-white/10 dark:bg-gradient-to-b dark:from-indigo-600/40 dark:via-slate-900 dark:to-slate-950 dark:text-slate-100">
            <h3 className="text-2xl font-semibold">Replace legacy config screens.</h3>
            <p className="text-base text-slate-700 dark:text-slate-200">
              Hook Easy Form pairs perfectly with shadcn/ui cards, inputs, and dialogs. Compose them just like the sections on this page: lightweight, theme-friendly, and accessible out of the box.
            </p>
            <div className="space-y-4 text-sm">
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-black/30">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Snapshot</p>
                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Zero-config field arrays</p>
                <p className="text-slate-700 dark:text-slate-300">
                  Drag to reorder, duplicate, or remove rows while keeping IDs stable for React lists.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white/80 p-4 dark:border-white/10 dark:bg-black/30">
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">Insight</p>
                <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Telemetry ready</p>
                <p className="text-slate-700 dark:text-slate-300">
                  Stream dirty states, errors, and submission windows to PostHog or custom analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
                DOCUMENTATION
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
                Choose your next stop.
              </h2>
            </div>
            <Link
              href={siteConfig.links.discussions}
              className="text-sm text-cyan-700 dark:text-cyan-200 underline-offset-4 hover:underline"
            >
              Join the community →
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {nextStepCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
                  {card.action}
                </p>
                <h3 className="mt-3 text-2xl font-semibold text-slate-900 dark:text-white">{card.title}</h3>
                <p className="mt-2 text-base text-slate-600 dark:text-slate-300">{card.description}</p>
                <span className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-700 dark:text-cyan-200">
                  {card.action} →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <footer className="flex flex-col items-start gap-3 border-t border-white/5 pt-8 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} {siteConfig.productName}</span>
          <span>Maintained by {siteConfig.owner.name} ({siteConfig.owner.company}).</span>
        </footer>
      </main>
    </div>
  );
}
