export const siteConfig = {
  productName: "Hook Easy Form",
  versionLabel: "v3.0",
  owner: {
    name: "Artem Stepanov",
    company: "Hook Easy Form OSS",
  },
  links: {
    github: "https://github.com/artemstepanov/hook-easy-form",
    discussions: "https://github.com/artemstepanov/hook-easy-form/discussions",
  },
};

export const docsRoutes = [
  { label: "Getting started", href: "/docs/getting-started" },
  { label: "API", href: "/docs/api" },
  { label: "Examples", href: "/docs/examples" },
  { label: "Form constructor", href: "/form-constructor" },
] as const;

export const navLinks = [
  ...docsRoutes,
  { label: "GitHub", href: siteConfig.links.github },
] as const;

export const nextStepCards = [
  {
    title: "Start building",
    description: "Install the package and scaffold your first form in minutes.",
    action: "Installation guide",
    href: "/docs/getting-started",
  },
  {
    title: "Browse the API",
    description: "Find the exact hook or helper for complex flows.",
    action: "Read API docs",
    href: "/docs/api",
  },
  {
    title: "See it in action",
    description: "Copy composable recipes for real-world UIs and dashboards.",
    action: "Explore examples",
    href: "/docs/examples",
  },
  {
    title: "Design forms visually",
    description: "Use the experimental constructor to share JSON schemas with your team.",
    action: "Open constructor",
    href: "/form-constructor",
  },
] as const;
