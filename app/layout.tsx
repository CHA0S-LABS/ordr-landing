import type { Metadata } from "next";
import {
  Poppins,
  Instrument_Serif,
  IBM_Plex_Mono,
  Darker_Grotesque,
  Playfair_Display,
  Sora,
  Geist,
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["italic"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const darkerGrotesque = Darker_Grotesque({
  variable: "--font-darker-grotesque",
  subsets: ["latin"],
  weight: ["400", "600"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["600"],
});

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "ordr.trade",
  description:
    "A fully on chain order book exchange on Solana that gives market makers their own private accounts, cheap repricing, and protection from toxic arbitrage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        poppins.variable,
        instrumentSerif.variable,
        ibmPlexMono.variable,
        darkerGrotesque.variable,
        playfairDisplay.variable,
        sora.variable,
        geist.variable,
        "font-sans",
      )}
    >
      <body className="min-h-full bg-neutral-950 font-sans text-stone-100">
        {children}
      </body>
    </html>
  );
}
