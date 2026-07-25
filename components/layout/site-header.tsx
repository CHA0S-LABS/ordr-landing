import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/site-data";
import { FOCUS_RING } from "@/lib/constants";
import { MobileNav } from "@/components/ui/mobile-nav";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-6 py-6 sm:px-10 sm:py-8">
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

      <nav aria-label="Primary" className="hidden items-center gap-9 sm:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`text-sm font-medium text-stone-100/90 transition-colors hover:text-white ${FOCUS_RING}`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <MobileNav links={NAV_LINKS} />
    </header>
  );
}
