import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Article } from "@/lib/site-data";
import { FOCUS_RING } from "@/lib/constants";

export function ArticleCard({
  article,
  className,
  imgHeight,
}: {
  article: Article;
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
