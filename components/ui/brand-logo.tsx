import Image from "next/image";
import type { Brand } from "@/lib/site-data";

export function BrandLogo({ brand }: { brand: Brand }) {
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
