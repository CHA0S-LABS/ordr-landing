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

const TRUSTED_BY = [
  {
    name: "Jito",
    src: "/assets/logos/jito.svg",
    width: 208,
    height: 82,
    hasWordmark: true,
    invert: false,
  },
  {
    name: "Solana",
    src: "/assets/logos/solana.svg",
    width: 398,
    height: 312,
    hasWordmark: false,
    invert: false,
  },
  {
    name: "Superteam",
    src: "/assets/logos/superteam.svg",
    width: 340,
    height: 262,
    hasWordmark: false,
    invert: true,
  },
  {
    name: "Helius",
    src: "/assets/logos/helius.svg",
    width: 190,
    height: 40,
    hasWordmark: true,
    invert: false,
  },
  {
    name: "Solana Foundation",
    src: "/assets/logos/solana-foundation.svg",
    width: 421,
    height: 72,
    hasWordmark: true,
    invert: false,
  },
  {
    name: "MetaDAO",
    src: "/assets/logos/metadao.jpg",
    width: 460,
    height: 460,
    hasWordmark: false,
    invert: false,
    chip: true,
  },
];

const PROTOCOL_FEATURES = [
  {
    title: "Shard Book",
    description:
      "Every market maker gets their own private order book account, so there's no shared write contention slowing you down.",
  },
  {
    title: "Global Vault",
    description:
      "One vault holds your capital across every market, with just-in-time execution the moment your order matches.",
  },
  {
    title: "Repricing",
    description:
      "Orders are stored as offsets from the mid price, so repricing your entire book is a single O(1) update.",
  },
];

const TEAM = [
  { name: "Vinaya", role: "CEO", src: "/assets/team/vinaya.png" },
  { name: "Avhi", role: "CTO", src: "/assets/team/avhi.png" },
  { name: "Manu", role: "CIO", src: "/assets/team/manu.png" },
  { name: "Arjun", role: "COO", src: "/assets/team/arjun.png" },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-sm";

const EYEBROW =
  "inline-flex items-center rounded-md border border-amber-400/20 bg-black/40 px-3 py-1 text-[11px] font-medium text-amber-300 sm:text-xs";

const MONO_BADGE =
  "inline-flex items-center bg-[rgba(126,122,122,0.2)] px-[10px] py-[6px] font-mono text-sm tracking-[-0.28px] text-[rgba(200,150,14,0.9)]";

export default function Home() {
  return (
    <main>
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
              <span className={`mb-6 ${EYEBROW}`}>
                PUBLIC MAINNET COMING SOON
              </span>

              <h1 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-tight text-[#dddcd1] sm:text-6xl lg:text-7xl">
                <span className="block">Open Market</span>
                <span className="mt-3 block sm:mt-4">
                  Making On{" "}
                  <span className="text-amber-400">Solana.</span>
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

      <section className="px-6 pb-16 pt-10 sm:px-10 sm:pt-16 lg:px-16">
        <div className="mx-auto flex max-w-[1312px] flex-col items-center gap-6 rounded-2xl bg-white/[0.03] px-6 py-6 sm:flex-row sm:justify-between sm:px-10">
          <span className="whitespace-nowrap text-xs font-medium uppercase tracking-widest text-stone-500">
            Trusted by
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {TRUSTED_BY.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center gap-2 opacity-60 transition-opacity hover:opacity-100"
              >
                <Image
                  src={brand.src}
                  alt={brand.hasWordmark ? brand.name : ""}
                  aria-hidden={brand.hasWordmark ? undefined : true}
                  width={brand.width}
                  height={brand.height}
                  className={
                    brand.chip
                      ? "h-6 w-6 rounded-full object-cover sm:h-7 sm:w-7"
                      : `h-5 w-auto sm:h-6 ${brand.invert ? "brightness-0 invert" : ""}`
                  }
                />
                {!brand.hasWordmark && (
                  <span className="text-base font-semibold text-stone-200 sm:text-lg">
                    {brand.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1312px]">
          <span className={MONO_BADGE}>Protocol</span>

          <h2 className="mt-6 max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-[#dddcd1] sm:text-5xl lg:text-6xl">
            Built for the
            <br />
            <span className="font-playfair font-normal text-[#ab7610]">
              real bottleneck
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-300/85 sm:text-base">
            PropAMMs are the gold standard for liquidity on Solana, but they
            are a closed club. Operated by single teams with proprietary
            infrastructure, locked behind years of custom engineering.
          </p>

          <div className="mt-14 grid grid-cols-[minmax(0,406px)] gap-6 sm:grid-cols-[repeat(2,minmax(0,406px))] lg:grid-cols-[repeat(3,minmax(0,406px))]">
            {PROTOCOL_FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="feature-card-glow flex aspect-[203/181] flex-col justify-center gap-6 rounded-[46px] px-10 py-8 sm:px-[53px]"
              >
                <h3 className="font-grotesque text-3xl font-semibold tracking-[-0.97px] text-[#e8e8e8] sm:text-4xl lg:text-[50px] lg:leading-[60px]">
                  {feature.title}
                </h3>
                <p className="font-grotesque text-lg leading-7 tracking-[0.24px] text-[#e8e8e8] lg:text-[24px] lg:leading-8">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16">
        <div className="mx-auto max-w-[1312px]">
          <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className={MONO_BADGE}>Our Teams</span>
              <h2 className="font-geist mt-6 max-w-md text-4xl font-medium leading-[1.05] tracking-tight text-[#f6f4e8] sm:text-5xl lg:text-6xl lg:tracking-[-3px]">
                Meet the Experts
              </h2>
            </div>
            <p className="font-geist max-w-sm text-sm leading-relaxed tracking-[-0.32px] text-white/90 sm:text-base">
              Core contributors dedicated to building reliable infrastructure
              for the Solana ecosystem
            </p>
          </div>

          <div className="mt-14 grid grid-cols-[minmax(0,320px)] gap-[22px] sm:grid-cols-[repeat(2,minmax(0,320px))] lg:grid-cols-[repeat(4,minmax(0,320px))]">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="relative aspect-[320/535] w-full overflow-hidden rounded-[34px] border border-white/5"
              >
                <Image
                  src={member.src}
                  alt={member.name}
                  fill
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-x-0 bottom-8 flex flex-col items-center px-4 text-center">
                  <p className="font-sora text-[28px] font-semibold leading-relaxed text-[#fffcfc]">
                    {member.name}
                  </p>
                  <p className="font-geist text-base tracking-[-0.32px] text-white/80">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
