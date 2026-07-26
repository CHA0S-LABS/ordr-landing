import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service | ordr.trade",
  description: "Terms of Service for ordr.trade.",
};

const SECTIONS = [
  {
    heading: "1. What These Terms Cover",
    body: [
      `These Terms govern your use of the ordr.trade website and interface (the "Interface"), made available by ordr.trade S.P., a segregated portfolio of Futarchy Governance SPC, an exempted segregated portfolio company incorporated in the Cayman Islands ("ordr", "we", "us"). The Interface is one way to access the ordr protocol, a set of smart contracts deployed on Solana that handle order matching and settlement automatically (the "Protocol"). The Protocol runs autonomously on-chain; we do not operate it, and confirmed transactions cannot be reversed by us. You can also interact with the Protocol directly or through a third-party client without ever using this Interface.`,
      "By using the Interface or the Protocol, you agree to these Terms. If you don't agree, don't use either.",
    ],
  },
  {
    heading: "2. Eligibility",
    body: [
      "You must be at least 18 and legally able to enter into these Terms. You may not use the Interface if you are located in, or a citizen or resident of, a jurisdiction where doing so would be unlawful, or a jurisdiction subject to comprehensive sanctions administered by the United Nations, United States, United Kingdom, or European Union. Using a VPN or similar tool to misrepresent your location in order to bypass these restrictions is a breach of these Terms.",
    ],
  },
  {
    heading: "3. The Interface Is Not the Protocol",
    body: [
      "We can modify, restrict, or shut down the Interface at any time without notice. That does not affect the Protocol itself, which continues to run independently on-chain. We may also curate which markets are shown or accessible through the Interface. Curation is not vetting: anyone can permissionlessly create a market on the Protocol, and we take no responsibility for the assets involved. Do your own research before trading anything.",
    ],
  },
  {
    heading: "4. Non-Custodial Access",
    body: [
      "You connect your own third-party wallet to use the Interface. We never hold your private keys or assets, cannot access them, and cannot help you recover them if lost. Every transaction is signed and broadcast by you; you're responsible for reviewing what you sign, including size limits, slippage, and fees.",
    ],
  },
  {
    heading: "5. Acceptable Use",
    body: [
      "You agree not to: manipulate markets (wash trading, spoofing, layering), launder funds or finance illegal activity, scrape or extract data from the Interface at scale without permission, interfere with the Interface's operation, or help anyone else do the above. You're responsible for your own trades, any resulting taxes, and network fees (which go to Solana validators, not to us).",
    ],
  },
  {
    heading: "6. Risk Disclosures",
    body: [
      "Digital asset prices are volatile and trading can result in total loss of funds. Smart contracts, including the Protocol's, can contain bugs or be exploited regardless of any audits performed. The Solana network, RPC providers, or other infrastructure the Interface depends on may go down or degrade outside our control. On-chain trading also carries MEV, front-running, and toxic-flow risk; the Protocol's design (private maker accounts, O(1) repricing) reduces but does not eliminate this. Don't trade with funds you can't afford to lose.",
    ],
  },
  {
    heading: "7. Intellectual Property",
    body: [
      "The ordr name, logo, and all Interface and Protocol content and code belong to ordr.trade S.P. and its licensors. You may not use our branding without written consent.",
    ],
  },
  {
    heading: "8. Disclaimers & Limitation of Liability",
    body: [
      'The Interface and Protocol are provided "as is," without warranties of any kind, including merchantability, fitness for a particular purpose, or that they will be uninterrupted or error-free. Nothing here is financial, legal, or tax advice.',
      "To the maximum extent the law allows, we are not liable for indirect, incidental, or consequential damages, or any loss of profits, data, or digital assets arising from your use of the Interface or Protocol. Our total liability for any claim is capped at USD $100.",
    ],
  },
  {
    heading: "9. Indemnification",
    body: [
      "You agree to cover our reasonable costs (including legal fees) arising from any claim related to your use of the Interface or Protocol, your breach of these Terms, or your violation of any law.",
    ],
  },
  {
    heading: "10. Dispute Resolution",
    body: [
      "Before filing any claim, contact us at legal@ordr.trade and give us 30 days to resolve it informally. If that doesn't work, disputes are settled by binding, individual arbitration under the ICC Arbitration Rules, seated in the Cayman Islands, rather than in court, and you waive the right to bring or join a class action. You can opt out of arbitration (not the class-action waiver) by written notice within 30 days of first agreeing to these Terms. Small-claims matters, requests for injunctive relief, and IP disputes are exempt and may go to court.",
    ],
  },
  {
    heading: "11. Governing Law",
    body: [
      "These Terms are governed by the laws of the Cayman Islands. Litigation not subject to arbitration under Section 10 will be brought in the courts of the Cayman Islands.",
    ],
  },
  {
    heading: "12. Force Majeure",
    body: [
      "We're not responsible for delays or failures caused by events outside our reasonable control, including natural disasters, war, government action, internet or infrastructure outages, or blockchain-specific events such as Solana consensus failures, network halts, or forks.",
    ],
  },
  {
    heading: "13. General",
    body: [
      "These Terms, together with our Privacy Policy, are the entire agreement between you and us. If any provision is found unenforceable, the rest remains in effect, and our failure to enforce a provision isn't a waiver of it. We may assign these Terms freely; you may not without our consent. Sections 4–11 survive termination of your access to the Interface. We may update these Terms at any time; continued use after an update means you accept the revised Terms.",
    ],
  },
  {
    heading: "14. Contact",
    body: ["Questions about these Terms: legal@ordr.trade."],
  },
];

export default function Terms() {
  return (
    <main className="min-h-screen bg-neutral-950 text-stone-100">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-10 sm:py-20">
        <Link href="/" className="inline-flex items-center gap-2.5">
          <Image
            src="/logo.png"
            alt="ordr"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="text-lg font-bold tracking-wide text-stone-50">
            ORDR
          </span>
        </Link>

        <h1 className="mt-10 text-4xl font-medium tracking-tight text-[#f6f4e8] sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-white/50">Last updated: July 2026</p>

        <div className="mt-12 flex flex-col gap-10">
          {SECTIONS.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold text-[#e8e8e8]">
                {section.heading}
              </h2>
              <div className="mt-3 flex flex-col gap-3">
                {section.body.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed text-stone-300/80"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
