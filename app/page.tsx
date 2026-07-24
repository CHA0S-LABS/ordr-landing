import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Highlighter } from "@/components/ui/highlighter";
import { GlassButton } from "@/components/ui/glass-button";

const NAV_LINKS = [
  { label: "Protocol", href: "#protocol" },
  { label: "Team", href: "#team" },
  { label: "Twitter", href: "https://x.com/ordrtrade" },
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

const ARTICLES = [
  {
    title: "Long Live Futarchy",
    date: "July 13, 2026",
    href: "https://x.com/ordrtrade/status/2076552689853575598",
    src: "/assets/blog/long-live-futarchy.jpg",
  },
  {
    title: "Ordr: The OpenMM Paradigm",
    date: "May 7, 2026",
    href: "https://x.com/ordrtrade/status/2052350867307999623",
    src: "/assets/blog/openmm-paradigm.png",
  },
  {
    title: "Why Ordr?",
    date: "March 23, 2026",
    href: "https://x.com/ordrtrade/status/2036062267704484229",
    src: "/assets/blog/why-ordr.png",
  },
];

const TEAM = [
  { name: "Vinaya", role: "CEO", src: "/assets/team/vinaya.png" },
  { name: "Avhi", role: "CTO", src: "/assets/team/avhi.png" },
  { name: "Manu", role: "CIO", src: "/assets/team/manu.png" },
  { name: "Arjun", role: "COO", src: "/assets/team/arjun.png" },
];

function XIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.833.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.337 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
      />
    </svg>
  );
}

const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/ordrtrade", icon: XIcon },
  { label: "GitHub", href: "https://github.com/CHA0S-LABS", icon: GithubIcon },
];

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-sm";

const EYEBROW =
  "inline-flex items-center rounded-md border border-amber-400/20 bg-black/40 px-3 py-1 text-[11px] font-medium text-amber-300 sm:text-xs";

const MONO_BADGE =
  "inline-flex items-center bg-[rgba(126,122,122,0.2)] px-[10px] py-[6px] font-mono text-sm tracking-[-0.28px] text-[rgba(200,150,14,0.9)]";

const FOOTER_LINK = `text-sm text-white/70 transition-colors hover:text-white ${FOCUS_RING}`;

function BrandLogo({ brand }: { brand: (typeof TRUSTED_BY)[number] }) {
  return (
    <div className="flex shrink-0 items-center gap-2 opacity-60 transition-opacity hover:opacity-100">
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
  );
}

function ArticleCard({
  article,
  className,
  imgHeight,
}: {
  article: (typeof ARTICLES)[number];
  className?: string;
  imgHeight: string;
}) {
  return (
    <a
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-2xl bg-[#0c0c0d] ring-[6px] ring-white/15 transition-[box-shadow] hover:ring-white/25 ${FOCUS_RING} ${className ?? ""}`}
    >
      <div className={`relative w-full ${imgHeight}`}>
        <Image
          src={article.src}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 60vw, 90vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
      </div>

      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="font-sora text-lg">
          <span className="font-semibold text-white">{article.title}.</span>{" "}
          <span className="font-geist font-light text-white/65">
            Read more
          </span>
        </p>
        <div className="mt-1 flex items-center gap-1.5 text-xs text-white/50">
          <span>{article.date}</span>
          <ArrowUpRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </div>
      </div>
    </a>
  );
}

export default function Home() {
  return (
    <>
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
                  className="hidden items-center gap-9 sm:flex"
                >
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_"
                      className={`text-sm font-medium text-stone-100/90 transition-colors hover:text-white ${FOCUS_RING}`}
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
                    Making On <span className="text-amber-400">Solana.</span>
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-sm leading-relaxed text-stone-300/85 sm:text-base">
                  A{" "}
                  <Highlighter
                    action="underline"
                    color="#fbbf24"
                    strokeWidth={2}
                  >
                    fully on chain
                  </Highlighter>{" "}
                  order book exchange on Solana that gives market makers their
                  own private accounts, cheap repricing, and protection from
                  toxic arbitrage.
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

        <section className="overflow-hidden px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16">
          <div className="mx-auto max-w-[1312px]">
            <div className="flex flex-col items-center gap-4 text-center">
              <span className={MONO_BADGE}>Product</span>
              <h2 className="font-geist max-w-xl text-4xl font-medium leading-[1.05] tracking-tight text-[#f6f4e8] sm:text-5xl lg:text-6xl lg:tracking-[-3px]">
                The Terminal
              </h2>
              <p className="max-w-md text-sm leading-relaxed text-stone-300/85 sm:text-base">
                A fully on-chain order book, live in your browser.
              </p>
            </div>

            <div className="relative mt-14 overflow-hidden rounded-xl border border-white/10 shadow-2xl sm:hidden">
              <Image
                src="/assets/app/trading-ui-dark.png"
                alt="ordr trading interface"
                width={2000}
                height={1121}
                className="h-auto w-full"
              />
            </div>

            <div className="relative mt-20 hidden sm:block sm:h-[460px] lg:h-[640px]">
              <div
                className="app-shot-glow pointer-events-none absolute inset-[-15%]"
                aria-hidden="true"
              />

              <div className="app-shot-tilt absolute left-[58%] top-0 w-[105%] max-w-[1300px] -translate-x-1/2 overflow-hidden rounded-md border border-white/[0.11] shadow-[0px_44px_24px_0px_rgba(0,0,0,0.25)]">
                <Image
                  src="/assets/app/trading-ui-dark.png"
                  alt="ordr trading interface"
                  width={2000}
                  height={1121}
                  className="block h-auto w-full"
                />
                <div
                  className="app-shot-fade pointer-events-none absolute inset-0"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pb-16 pt-10 sm:px-10 sm:pt-16 lg:px-16">
          <div className="mx-auto flex max-w-[1312px] flex-col items-center gap-6 rounded-2xl bg-white/[0.03] px-6 py-6 sm:flex-row sm:justify-between sm:px-10">
            <span className="whitespace-nowrap text-xs font-medium uppercase tracking-widest text-stone-500">
              Trusted by
            </span>

            <div
              className="marquee-fade w-full overflow-hidden sm:hidden"
              aria-hidden="true"
            >
              <div className="flex w-max animate-[marquee_22s_linear_infinite] items-center gap-10 motion-reduce:animate-none">
                {[...TRUSTED_BY, ...TRUSTED_BY].map((brand, i) => (
                  <BrandLogo key={`${brand.name}-${i}`} brand={brand} />
                ))}
              </div>
            </div>

            <div className="hidden flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:flex">
              {TRUSTED_BY.map((brand) => (
                <BrandLogo key={brand.name} brand={brand} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="protocol"
          className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16"
        >
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

            <div className="mt-14 grid grid-cols-[repeat(2,minmax(0,160px))] gap-4 sm:grid-cols-[repeat(2,minmax(0,320px))] sm:gap-[22px] lg:grid-cols-[repeat(4,minmax(0,320px))]">
              {TEAM.map((member) => (
                <div
                  key={member.name}
                  className="relative aspect-[320/535] w-full overflow-hidden rounded-2xl border border-white/5 sm:rounded-[34px]"
                >
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 45vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="absolute inset-x-0 bottom-4 flex flex-col items-center px-2 text-center sm:bottom-8 sm:px-4">
                    <p className="font-sora text-base font-semibold leading-relaxed text-[#fffcfc] sm:text-[28px]">
                      {member.name}
                    </p>
                    <p className="font-geist text-xs tracking-[-0.32px] text-white/80 sm:text-base">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16">
          <div className="mx-auto max-w-[1312px]">
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className={MONO_BADGE}>Vision</span>
                <h2 className="font-geist mt-6 max-w-md text-4xl font-medium leading-[1.05] tracking-tight text-[#f6f4e8] sm:text-5xl lg:text-6xl lg:tracking-[-3px]">
                  Articles
                </h2>
              </div>
              <p className="font-geist max-w-sm text-sm leading-relaxed tracking-[-0.28px] text-white/90 sm:text-base">
                Our latest thinking on markets, protocol design, and Solana
                infrastructure, from execution mechanics to the research
                behind how the protocol is built.
              </p>
            </div>

            <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-6">
              <ArticleCard
                article={ARTICLES[0]}
                className="sm:col-span-2"
                imgHeight="h-[300px] sm:h-[420px]"
              />
              <ArticleCard
                article={ARTICLES[1]}
                className="sm:col-span-3"
                imgHeight="h-[300px] sm:h-[420px]"
              />
              <ArticleCard
                article={ARTICLES[2]}
                className="sm:col-span-5"
                imgHeight="h-[260px] sm:h-[320px]"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-[#0a0a0a] px-6 pt-14 pb-8 sm:px-10 sm:pt-20 sm:pb-10 lg:px-16">
        <div
          className="cta-footer-glow pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1312px]">
          <div className="flex flex-col items-start gap-6 pb-10 sm:pb-14">
            <h2 className="cta-heading-gradient font-geist text-5xl font-medium leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl lg:tracking-[-3px]">
              Get Early
              <br />
              Access
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-stone-300/85 sm:text-base">
              Trade on a fully on-chain order book. Public mainnet is coming
              soon.
            </p>

            <button
              type="button"
              className={`group inline-flex shrink-0 items-center gap-3 rounded-full bg-[rgba(13,30,49,0.2)] py-[7px] pl-6 pr-[7px] backdrop-blur-sm ${FOCUS_RING}`}
            >
              <span className="font-geist text-[17px] font-medium tracking-[-0.34px] text-[#f7f2ec]">
                Get Access
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f2ec] text-[#161512] transition-transform group-hover:translate-x-0.5">
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </span>
            </button>
          </div>

          <div className="h-px w-full bg-white/10" />

          <div className="flex flex-col items-center gap-6 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <Link
              href="/"
              className={`flex items-center gap-2.5 ${FOCUS_RING}`}
            >
              <Image
                src="/logo.png"
                alt=""
                aria-hidden="true"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="font-mono text-base uppercase tracking-[0.72px] text-white">
                ordr
              </span>
            </Link>

            <p className="text-sm text-white/50">
              © 2026 ordr.trade. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link href="/terms" className={FOOTER_LINK}>
                Terms of Service
              </Link>
              <Link href="/privacy" className={FOOTER_LINK}>
                Privacy Policy
              </Link>
            </div>

            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-white/60 transition-colors hover:text-white ${FOCUS_RING}`}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
