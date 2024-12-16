import Link from "next/link";

import { SiteConfig } from "~/config/site";
import { cn } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import { BorderBeam } from "~/components/border-beam";
import SparklesText from "~/components/sparkles-text";

export default function MarketingPage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className={cn("flex flex-col mb-4 items-center justify-center")}>
        <SparklesText text={SiteConfig.title} />
        <h1 className="mb-6 text-center text-3xl md:text-6xl">Supercharge Team Productivity</h1>
      </div>

      <div className="relative h-[512px] w-full max-w-5xl rounded-xl bg-gradient-to-br from-muted/50 to-muted p-8">
        <BorderBeam />
        <div className="grid h-full grid-cols-4 gap-4">
          <div className="rounded-lg bg-background/80 p-4">
            <h3 className="mb-4 font-semibold">New Tasks</h3>
            <div className="space-y-2">
              <div className="h-16 rounded-md bg-muted/50"></div>
              <div className="h-16 rounded-md bg-muted/50"></div>
            </div>
          </div>
          <div className="rounded-lg bg-background/80 p-4">
            <h3 className="mb-4 font-semibold">In Progress</h3>
            <div className="space-y-2">
              <div className="h-16 rounded-md bg-muted/50"></div>
            </div>
          </div>
          <div className="rounded-lg bg-background/80 p-4">
            <h3 className="mb-4 font-semibold">Review</h3>
            <div className="space-y-2">
              <div className="h-16 rounded-md bg-muted/50"></div>
            </div>
          </div>
          <div className="rounded-lg bg-background/80 p-4">
            <h3 className="mb-4 font-semibold">Done</h3>
            <div className="space-y-2">
              <div className="h-16 rounded-md bg-muted/50"></div>
            </div>
          </div>
        </div>
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
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">Get {SiteConfig.title}</Link>
      </Button>
    </div>
  );
}
