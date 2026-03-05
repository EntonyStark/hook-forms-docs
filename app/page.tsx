import Link from "next/link";

import { nextStepCards, siteConfig } from "./constants/site";

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

const codeSample = `import useEasyForm from "hook-easy-form";

type SignInForm = {
  email: string;
  password: string;
};

export function SignInCard() {
  const { submitEvent, getProps, errors, valid, pristine, formObject } =
    useEasyForm<SignInForm>({
      initialForm: [
        {
          name: "email",
          value: "",
          options: {
            type: "email",
            placeholder: "team@company.com",
            required: "Email is required",
          },
        },
        {
          name: "password",
          value: "",
          options: {
            type: "password",
            placeholder: "••••••••",
            minLength: 8,
            required: "Password is required",
          },
        },
      ],
    });

  return (
    <form onSubmit={submitEvent(loginUser)} className="space-y-3">
      <input {...getProps("email", formObject.email.options, true)} />
      {errors.email && <p>{errors.email}</p>}

      <input {...getProps("password", formObject.password.options, true)} />
      {errors.password && <p>{errors.password}</p>}

      <button disabled={!valid || pristine}>Sign in</button>
    </form>
  );
}`;

export default function Home() {
  return (
    <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-12 sm:px-10 lg:px-16 lg:pb-32 lg:pt-20">
      <header className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
            The form engine built for hooks-first teams
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-white sm:text-6xl">
            Build fast, type-safe forms with predictable rendering.
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Hook Easy Form gives React teams composable state primitives for login,
            checkout, dashboard, and onboarding workflows without extra runtime baggage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs/getting-started"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Start building
            </Link>
            <Link
              href={siteConfig.links.github}
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-white/40"
            >
              Star on GitHub
            </Link>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:items-center">
          <dl className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-slate-400">{metric.label}</dt>
                <dd className="text-xl font-semibold text-white">{metric.value}</dd>
              </div>
            ))}
          </dl>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-2xl shadow-blue-500/10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-slate-400">DATA FLOW</p>
            <pre className="rounded-2xl border border-white/5 bg-black/60 p-5 text-sm leading-relaxed text-slate-100">
              {codeSample}
            </pre>
            <p className="mt-4 text-sm text-slate-400">
              Realistic auth setup with inline validation, form-level state, and submit guards.
            </p>
          </div>
        </div>
      </header>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">FEATURES</p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Designed for teams shipping ambitious workflows.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featureHighlights.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.5)] transition hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200">
                <span className="rounded-full bg-cyan-400/20 px-3 py-1 text-[11px] text-cyan-200">
                  {item.badge}
                </span>
                <span className="text-slate-400">Capability</span>
              </div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-slate-300">{item.description}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_rgba(15,23,42,0.45)]">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">workflow</p>
          <h2 className="text-3xl font-semibold text-white">Bring structure without losing velocity.</h2>
          <div className="space-y-8">
            {workflow.map((step) => (
              <div key={step.title} className="rounded-2xl border border-white/10 bg-slate-950/60 p-5">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-slate-300">{step.description}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-400">
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
        <div className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-b from-indigo-600/40 via-slate-900 to-slate-950 p-8 text-slate-100">
          <h3 className="text-2xl font-semibold">Replace legacy config screens.</h3>
          <p className="text-base text-slate-200">
            Hook Easy Form pairs perfectly with shadcn/ui cards, inputs, and dialogs. Compose them
            just like the sections on this page: lightweight, theme-friendly, and accessible out of the
            box.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-400">DOCUMENTATION</p>
            <h2 className="text-3xl font-semibold text-white">Choose your next stop.</h2>
          </div>
          <Link
            href={siteConfig.links.discussions}
            className="text-sm text-cyan-200 underline-offset-4 hover:underline"
          >
            Join the community →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {nextStepCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-400">{card.action}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{card.title}</h3>
              <p className="mt-2 text-base text-slate-300">{card.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-cyan-200">
                {card.action} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="flex flex-col items-start gap-3 border-t border-white/5 pt-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <span>© {new Date().getFullYear()} {siteConfig.productName}</span>
        <span>
          Maintained by <Link href={siteConfig.owner.profileUrl} className="underline-offset-4 hover:underline">{siteConfig.owner.name}</Link> ({siteConfig.owner.company}).
        </span>
      </footer>
    </main>
  );
}
