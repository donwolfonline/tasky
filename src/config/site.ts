export const SiteConfig = {
  title: "Taskyit",
  description: "Simplify task management, boost collaboration, and achieve more together",
} as const;

export const Paths = {
  LandingPage: "/",
  SignInPage: "/sign-in",
  SignUpPage: "/sign-up",
  Organization: "/organization",
  SelectOrg: "/select-org",
  Activity: "/organization/:param1/activity",
  Settings: "/organization/:param1/settings",
  Board: "/board/:param1",
} as const;
