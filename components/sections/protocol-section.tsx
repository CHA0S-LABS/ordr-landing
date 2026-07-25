import { PROTOCOL_FEATURES } from "@/lib/site-data";
import { MONO_BADGE } from "@/lib/constants";

export function ProtocolSection() {
  return (
    <section id="protocol" className="px-6 pb-20 sm:px-10 sm:pb-28 lg:px-16">
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

        <div className="mt-14 grid grid-cols-[minmax(0,406px)] gap-6 sm:grid-cols-[repeat(2,minmax(0,406px))] lg:grid-cols-[repeat(4,minmax(0,406px))]">
          {PROTOCOL_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="feature-card-glow flex flex-col justify-center gap-6 rounded-[46px] px-8 py-8 sm:px-8 lg:px-[53px] lg:py-10"
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
  );
}
