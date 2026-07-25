import { TRUSTED_BY } from "@/lib/site-data";
import { BrandLogo } from "@/components/ui/brand-logo";

export function TrustedBySection() {
  return (
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
  );
}
