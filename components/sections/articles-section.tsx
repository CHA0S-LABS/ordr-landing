import { ARTICLES } from "@/lib/site-data";
import { MONO_BADGE } from "@/lib/constants";
import { ArticleCard } from "@/components/ui/article-card";

export function ArticlesSection() {
  return (
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
            infrastructure, from execution mechanics to the research behind how
            the protocol is built.
          </p>
        </div>

        <div className="mx-auto mt-14 grid w-full max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-5 sm:gap-6">
          <ArticleCard
            article={ARTICLES[0]}
            className="sm:col-span-3"
            imgHeight="h-[220px] sm:h-[300px]"
          />
          <ArticleCard
            article={ARTICLES[1]}
            className="sm:col-span-2"
            imgHeight="h-[220px] sm:h-[300px]"
          />
          <ArticleCard
            article={ARTICLES[2]}
            className="sm:col-span-2"
            imgHeight="h-[220px] sm:h-[300px]"
          />
          <ArticleCard
            article={ARTICLES[3]}
            className="sm:col-span-3"
            imgHeight="h-[220px] sm:h-[300px]"
          />
        </div>
      </div>
    </section>
  );
}
