import Image from "next/image";
import Link from "next/link";
import { Github, Twitter } from "lucide-react";

import { SiteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import SparklesText from "~/components/sparkles-text";
import { BorderBeam } from "~/components/border-beam";

import landingImg from "./landing-img.png";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/donwolfonline/tasky",
    icon: <Github className="h-5 w-5" />,
  },
  {
    name: "X (Twitter)",
    href: "https://twitter.com/donwolfonline",
    icon: <Twitter className="h-5 w-5" />,
  },
  {
    name: "Vercel",
    href: "https://vercel.com",
    icon: (
      <svg
        aria-label="Vercel Logo"
        fill="currentColor"
        viewBox="0 0 75 65"
        height="20"
        width="20"
      >
        <path d="M37.59.25l36.95 64H.64l36.95-64z" />
      </svg>
    ),
  },
];

export default function MarketingPage() {
  return (
    <div className="flex min-h-[calc(100vh-7rem)] flex-col">
      <div className="flex flex-col items-center justify-center flex-1">
        <div className={cn("flex flex-col mb-4 items-center justify-center")}>
          <SparklesText text={SiteConfig.title} />
          <h1 className="mb-6 text-center text-3xl md:text-6xl">Supercharge Team Productivity</h1>
        </div>

        <div className="relative h-[512px] rounded-xl">
          <BorderBeam />
          <Image src={landingImg} alt="Taskyit Board" priority />
        </div>

        <div
          className={cn(
            "mx-auto mt-4 max-w-xs font-light text-center text-sm text-muted-foreground md:max-w-2xl md:text-xl",
          )}
        >
          Join the ranks of successful teams who have already unlocked their full potential with{" "}
          {SiteConfig.title}. Sign up today and experience the future of collaborative task management
          for yourself!
        </div>
        <Button className="mt-6 mb-10" size="lg" asChild>
          <Link href="/sign-up">Get {SiteConfig.title}</Link>
        </Button>
      </div>

      <footer className="w-full border-t bg-background/5 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-7xl px-6 py-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-muted-foreground">
              {new Date().getFullYear()} {SiteConfig.title}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={link.name}
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}