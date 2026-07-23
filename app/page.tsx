import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import { GlassButton } from "@/components/ui/glass-button";

const NAV_LINKS = [
  { label: "Protocol", href: "#protocol" },
  { label: "Team", href: "#team" },
  { label: "Twitter", href: "https://twitter.com/ordrdottrade" },
  { label: "Blog", href: "#blog" },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-sm";

export default function Home() {
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
          <header className="flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
            <Link
              href="/"
              className={`flex items-center gap-2.5 ${FOCUS_RING}`}
            >
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

            <nav
              aria-label="Primary"
              className="flex items-center gap-5 sm:gap-9"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_"
                  className={`text-xs font-medium text-stone-100/90 transition-colors hover:text-white sm:text-sm ${FOCUS_RING}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </header>

          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <span className="mb-6 inline-flex items-center rounded-md border border-amber-400/20 bg-black/40 px-3 py-1 font-mono text-[11px] text-amber-300 sm:text-xs">
              PUBLIC MAINNET COMING SOON
            </span>

            <h1 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-stone-50 sm:text-6xl lg:text-7xl">
              Open Market
              <br />
              Making On{" "}
              <span className="font-serif italic text-amber-400">
                Solana.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-300/85 sm:text-base">
              A{" "}
              <Highlighter action="underline" color="#fbbf24" strokeWidth={2}>
                fully on chain
              </Highlighter>{" "}
              order book exchange on Solana that gives market makers their own
              private accounts, cheap repricing, and protection from toxic
              arbitrage.
            </p>

            <GlassButton
              className="mt-8"
              contentClassName="flex items-center gap-2"
            >
              Talk to us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </GlassButton>
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
