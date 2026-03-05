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
      'Use helpers like form("email") or list("items") to wire components without prop drilling.',
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
      <section className="space-y-10">
        <div className="max-w-3xl space-y-4">
          <p className="inline-flex rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            The form engine built for hooks-first teams
          </p>
          <h1 className="text-5xl font-semibold leading-tight text-foreground sm:text-6xl">
            Build fast, type-safe forms with predictable rendering.
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Hook Easy Form gives React teams composable state primitives for
            login, checkout, dashboard, and onboarding workflows without extra
            runtime baggage.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/docs/getting-started"
              className="rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-cyan-300"
            >
              Start building
            </Link>
            <Link
              href={siteConfig.links.github}
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-card-foreground transition hover:border-foreground/40"
            >
              Star on GitHub
            </Link>
          </div>
        </div>

        <div className="grid gap-12 lg:items-start">
          <dl className="grid gap-6 self-start rounded-3xl border border-border bg-card/70 p-6 text-sm sm:grid-cols-3">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <dt className="text-muted-foreground">{metric.label}</dt>
                <dd className="text-xl font-semibold text-foreground">
                  {metric.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="rounded-3xl border border-border bg-linear-to-br from-card to-background p-6 shadow-2xl shadow-blue-500/10">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              DATA FLOW
            </p>
            <pre className="rounded-2xl border border-border bg-background/80 p-5 text-sm leading-relaxed text-card-foreground">
              {codeSample}
            </pre>
            <p className="mt-4 text-sm text-muted-foreground">
              Realistic auth setup with inline validation, form-level state, and
              submit guards.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            FEATURES
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Designed for teams shipping ambitious workflows.
          </h2>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {featureHighlights.map((item) => (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/70 p-6 shadow-[0_25px_70px_rgba(15,23,42,0.5)] transition hover:-translate-y-1"
            >
              <div className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                <span className="rounded-full bg-primary/20 px-3 py-1 text-[11px] text-primary">
                  {item.badge}
                </span>
                <span className="text-muted-foreground">Capability</span>
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <div className="mt-6 h-px w-full bg-linear-to-r from-transparent via-border to-transparent" />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-8 rounded-3xl border border-border bg-card/70 p-8 shadow-[0_35px_80px_rgba(15,23,42,0.45)]">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
            workflow
          </p>
          <h2 className="text-3xl font-semibold text-foreground">
            Bring structure without losing velocity.
          </h2>
          <div className="space-y-8">
            {workflow.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-border bg-background/80 p-5"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-muted-foreground">{step.description}</p>
                <ul className="mt-4 space-y-1 text-sm text-muted-foreground">
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
        <div className="space-y-6 rounded-3xl border border-border bg-linear-to-b from-indigo-500/40 via-card to-background p-8 text-card-foreground">
          <h3 className="text-2xl font-semibold">
            Replace legacy config screens.
          </h3>
          <p className="text-base text-muted-foreground">
            Hook Easy Form pairs perfectly with shadcn/ui cards, inputs, and
            dialogs. Compose them just like the sections on this page:
            lightweight, theme-friendly, and accessible out of the box.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-muted-foreground">
              DOCUMENTATION
            </p>
            <h2 className="text-3xl font-semibold text-foreground">
              Choose your next stop.
            </h2>
          </div>
          <Link
            href={siteConfig.links.discussions}
            className="text-sm text-primary underline-offset-4 hover:underline"
          >
            Join the community →
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {nextStepCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="rounded-3xl border border-border bg-card/70 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-muted-foreground">
                {card.action}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                {card.title}
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                {card.description}
              </p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                {card.action} →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="flex flex-col items-start gap-3 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <span>
          © {new Date().getFullYear()} {siteConfig.productName}
        </span>
        <span>
          Maintained by{" "}
          <Link
            href={siteConfig.owner.profileUrl}
            className="underline-offset-4 hover:underline"
          >
            {siteConfig.owner.name}
          </Link>{" "}
          ({siteConfig.owner.company}).
        </span>
      </footer>
    </main>
  );
}
