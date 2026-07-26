import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MONO_BADGE } from "@/lib/constants";
import { GlassButton } from "@/components/ui/glass-button";

export const metadata = {
  title: "Page not found | ordr.trade",
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-950 px-6 text-center">
      <div
        className="cta-footer-glow pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center">
        <span className={MONO_BADGE}>404</span>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-stone-300/85 sm:text-base">
          The page you&rsquo;re looking for isn&rsquo;t on the book. It may
          have moved, or the link might be off.
        </p>

        <Link href="/">
          <GlassButton
            className="mt-8 cursor-pointer"
            contentClassName="flex items-center gap-2"
          >
            Back to Home
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </GlassButton>
        </Link>
      </div>
    </main>
  );
}
