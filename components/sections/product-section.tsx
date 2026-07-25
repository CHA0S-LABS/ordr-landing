import Image from "next/image";
import { MONO_BADGE } from "@/lib/constants";

export function ProductSection() {
  return (
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

        <div className="relative mt-20 hidden sm:block sm:h-[460px] lg:h-[690px]">
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
  );
}
