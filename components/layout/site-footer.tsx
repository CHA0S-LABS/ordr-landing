import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/site-data";
import { FOCUS_RING, FOOTER_LINK } from "@/lib/constants";

export function SiteFooter() {
  return (
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
            Trade on a fully on-chain order book. Public mainnet is coming soon.
          </p>

          <button
            type="button"
            className={`group inline-flex shrink-0 items-center gap-3 rounded-full bg-[rgba(13,30,49,0.2)] py-[7px] pl-6 pr-[7px] backdrop-blur-sm ${FOCUS_RING}`}
          >
            <a
              href="https://devnet.ordr.trade/"
              target="_blank"
              className="font-geist text-[17px] font-medium tracking-[-0.34px] text-[#f7f2ec]"
            >
              Explore Devnet
            </a>
            <a
              href="https://devnet.ordr.trade/"
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f7f2ec] text-[#161512] transition-transform group-hover:translate-x-0.5"
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </button>
        </div>

        <div className="h-px w-full bg-white/10" />

        <div className="flex flex-col items-center gap-6 pt-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <Link href="/" className={`flex items-center gap-2.5 ${FOCUS_RING}`}>
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

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-6">
              <Link href="/terms" className={FOOTER_LINK}>
                Terms of Service
              </Link>
            </div>

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
  );
}
