"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, RotateCcw } from "lucide-react";
import { MONO_BADGE, FOCUS_RING } from "@/lib/constants";
import { GlassButton } from "@/components/ui/glass-button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-neutral-950 px-6 text-center">
      <div
        className="cta-footer-glow pointer-events-none absolute inset-0"
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center">
        <Link href="/" className={`flex items-center gap-2.5 ${FOCUS_RING}`}>
          <Image
            src="/logo.png"
            alt="ordr"
            width={40}
            height={40}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-lg font-bold tracking-wide text-stone-50">
            ORDR
          </span>
        </Link>

        <span className={`mt-10 ${MONO_BADGE}`}>Error</span>

        <h1 className="mt-6 max-w-lg text-4xl font-medium leading-[1.05] tracking-tight text-[#dddcd1] sm:text-5xl">
          Something broke on our end.
        </h1>

        <p className="mt-4 max-w-md text-sm leading-relaxed text-stone-300/85 sm:text-base">
          An unexpected error occurred. Try again, or head back to the
          homepage.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => reset()}
            className={`group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-stone-100 transition-colors hover:bg-white/5 ${FOCUS_RING}`}
          >
            <RotateCcw
              className="h-4 w-4 transition-transform group-hover:-rotate-45"
              aria-hidden="true"
            />
            Try again
          </button>

          <Link href="/">
            <GlassButton
              className="cursor-pointer"
              contentClassName="flex items-center gap-2"
            >
              Back to ordr.trade
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </GlassButton>
          </Link>
        </div>
      </div>
    </main>
  );
}
