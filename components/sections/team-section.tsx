import Image from "next/image";
import { TEAM } from "@/lib/site-data";
import { FOCUS_RING, MONO_BADGE } from "@/lib/constants";
import { XIcon, GithubIcon } from "@/components/ui/social-icons";

export function TeamSection() {
  return (
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
              className="group relative aspect-[320/535] w-full overflow-hidden rounded-2xl border border-white/5 sm:rounded-[34px]"
            >
              <Image
                src={member.src}
                alt={member.name}
                fill
                sizes="(min-width: 1024px) 320px, (min-width: 640px) 45vw, 45vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100" />

              <div className="absolute right-4 top-4 flex translate-y-2 gap-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100 sm:right-6 sm:top-6">
                <a
                  href={member.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on X`}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 ${FOCUS_RING}`}
                >
                  <XIcon className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on GitHub`}
                  className={`flex h-9 w-9 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-black/80 ${FOCUS_RING}`}
                >
                  <GithubIcon className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>

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
  );
}
