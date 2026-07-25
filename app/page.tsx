import { HeroSection } from "@/components/sections/hero-section";
import { ProductSection } from "@/components/sections/product-section";
import { TrustedBySection } from "@/components/sections/trusted-by-section";
import { ProtocolSection } from "@/components/sections/protocol-section";
import { TeamSection } from "@/components/sections/team-section";
import { ArticlesSection } from "@/components/sections/articles-section";
import { SiteFooter } from "@/components/layout/site-footer";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProductSection />
        <TrustedBySection />
        <ProtocolSection />
        <TeamSection />
        <ArticlesSection />
      </main>

      <SiteFooter />
    </>
  );
}
