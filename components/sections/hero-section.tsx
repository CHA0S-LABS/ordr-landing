import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { EYEBROW } from "@/lib/constants";
import { Highlighter } from "@/components/ui/highlighter";
import { GlassButton } from "@/components/ui/glass-button";
import { SiteHeader } from "@/components/layout/site-header";

export function HeroSection() {
  return (
    <div className="flex min-h-screen flex-col px-4 py-6 sm:px-6 sm:py-8">
      <section className="relative flex flex-1 flex-col overflow-hidden rounded-[28px] bg-neutral-950">
        <Image
          src="/assets/hero.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="relative flex flex-1 flex-col">
          <SiteHeader />

          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <span className={`mb-6 ${EYEBROW}`}>
              PUBLIC MAINNET COMING SOON
            </span>

            <h1 className="max-w-3xl text-[25px] font-medium leading-[1.05] tracking-tight text-[#dddcd1] sm:text-6xl lg:text-7xl">
              <span className="block">Open Market</span>
              <span className="mt-3 flex flex-wrap items-center gap-x-3 sm:mt-4">
                <span>Making On</span>
                <span className="inline-flex items-center gap-x-3">
                  <Image
                    src="/assets/logos/solana.svg"
                    alt=""
                    aria-hidden="true"
                    width={398}
                    height={312}
                    className="hidden h-10 w-auto opacity-80 brightness-0 invert sm:block lg:h-12"
                  />
                  <span className="text-amber-400">Solana.</span>
                </span>
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-300/85 sm:text-base">
              A{" "}
              <Highlighter action="underline" color="#fbbf24" strokeWidth={2}>
                fully on chain
              </Highlighter>{" "}
              order book exchange on Solana that gives market makers their
              own private accounts, cheap repricing, and protection from
              toxic arbitrage.
            </p>

            <a href="https://x.com/ordrtrade/" target="_blank">
              <GlassButton
                className="mt-8 cursor-pointer"
                contentClassName="flex items-center gap-2"
              >
                Talk to us
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </GlassButton>
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 pb-10 text-stone-400">
            <span className="text-xs">Scroll to Discover</span>
            <ChevronDown
              className="h-4 w-4 motion-safe:animate-bounce"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
