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

const title = "ordr.trade";
const description =
  "A fully on chain order book exchange on Solana that gives market makers their own private accounts, cheap repricing, and protection from toxic arbitrage.";
const ogImage = {
  url: "/assets/opengraph-image.png",
  width: 1734,
  height: 907,
  alt: "ordr.trade: Open Market Making on Solana",
};

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://ordr.trade"),
  alternates: {
    canonical: "https://ordr.trade",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title,
    description,
    url: "https://ordr.trade",
    siteName: "ordr.trade",
    images: [ogImage],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
    site: "@ordrtrade",
  },
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
      <body className="min-h-full bg-neutral-950 font-sans text-stone-100 select-none">
        {children}
      </body>
    </html>
  );
}
