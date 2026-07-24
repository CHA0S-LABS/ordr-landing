"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface MobileNavLink {
  label: string;
  href: string;
}

const FOCUS_RING =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 rounded-sm";

export function MobileNav({ links }: { links: MobileNavLink[] }) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="sm:hidden">
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className={`flex h-9 w-9 items-center justify-center text-stone-100 ${FOCUS_RING}`}
      >
        <Menu className="h-6 w-6" aria-hidden="true" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-neutral-950">
          <div className="flex items-center justify-between px-6 py-6">
            <Link
              href="/"
              onClick={() => setOpen(false)}
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
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className={`flex h-9 w-9 items-center justify-center text-stone-100 ${FOCUS_RING}`}
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <nav
            aria-label="Mobile"
            className="flex flex-1 flex-col items-center justify-center gap-8"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-2xl font-medium text-stone-100 transition-colors hover:text-amber-400 ${FOCUS_RING}`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
