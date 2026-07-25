import { XIcon, GithubIcon } from "@/components/ui/social-icons";

export const NAV_LINKS = [
  { label: "Protocol", href: "#protocol" },
  { label: "Team", href: "#team" },
  { label: "Twitter", href: "https://x.com/ordrtrade" },
  { label: "Blog", href: "#blog" },
];

export const TRUSTED_BY = [
  {
    name: "Jito",
    src: "/assets/logos/jito.svg",
    width: 208,
    height: 82,
    hasWordmark: true,
    invert: false,
  },
  {
    name: "Solana",
    src: "/assets/logos/solana.svg",
    width: 398,
    height: 312,
    hasWordmark: false,
    invert: false,
  },
  {
    name: "Superteam",
    src: "/assets/logos/superteam.svg",
    width: 340,
    height: 262,
    hasWordmark: false,
    invert: true,
  },
  {
    name: "Helius",
    src: "/assets/logos/helius.svg",
    width: 190,
    height: 40,
    hasWordmark: true,
    invert: false,
  },
  {
    name: "Solana Foundation",
    src: "/assets/logos/solana-foundation.svg",
    width: 421,
    height: 72,
    hasWordmark: true,
    invert: false,
  },
  {
    name: "MetaDAO",
    src: "/assets/logos/metadao.jpg",
    width: 460,
    height: 460,
    hasWordmark: false,
    invert: false,
    chip: true,
  },
];

export const PROTOCOL_FEATURES = [
  {
    title: "Shard Book",
    description:
      "Every market maker gets their own private order book account, so there's no shared write contention slowing you down.",
  },
  {
    title: "Global Vault",
    description:
      "One vault holds your capital across every market, with just-in-time execution the moment your order matches.",
  },
  {
    title: "Repricing",
    description:
      "Orders are stored as offsets from the mid price, so repricing your entire book is a single O(1) update.",
  },
  {
    title: "MEV Protection",
    description:
      "Orders are sequenced through ACE and Jito BAM, so market makers can cancel before predatory MEV ever touches their trade.",
  },
];

export const ARTICLES = [
  {
    title: "Road to Ownership",
    date: "July 24, 2026",
    href: "https://x.com/ordrtrade/status/2080627148675793022",
    src: "/assets/blog/road-to-ownership.png",
  },
  {
    title: "Long Live Futarchy",
    date: "July 13, 2026",
    href: "https://x.com/ordrtrade/status/2076552689853575598",
    src: "/assets/blog/long-live-futarchy.jpg",
  },
  {
    title: "Ordr: The OpenMM Paradigm",
    date: "May 7, 2026",
    href: "https://x.com/ordrtrade/status/2052350867307999623",
    src: "/assets/blog/openmm-paradigm.png",
  },
  {
    title: "Why Ordr?",
    date: "March 23, 2026",
    href: "https://x.com/ordrtrade/status/2036062267704484229",
    src: "/assets/blog/why-ordr.png",
  },
];

export const TEAM = [
  {
    name: "Vinaya",
    role: "CEO",
    src: "/assets/team/vinaya.png",
    x: "https://x.com/Vinayapr23",
    github: "https://github.com/Vinayapr23",
  },
  {
    name: "Avhi",
    role: "CTO",
    src: "/assets/team/avhi.png",
    x: "https://x.com/avhidotsol",
    github: "https://github.com/AvhiMaz",
  },
  {
    name: "Manu",
    role: "CIO",
    src: "/assets/team/manu.png",
    x: "https://x.com/boomheadvt",
    github: "https://github.com/manudasari265",
  },
  {
    name: "Arjun",
    role: "COO",
    src: "/assets/team/arjun.png",
    x: "https://x.com/4rjunc",
    github: "https://github.com/aarjn",
  },
];

export const SOCIAL_LINKS = [
  { label: "X", href: "https://x.com/ordrtrade", icon: XIcon },
  { label: "GitHub", href: "https://github.com/CHA0S-LABS", icon: GithubIcon },
];

export type NavLink = (typeof NAV_LINKS)[number];
export type Brand = (typeof TRUSTED_BY)[number];
export type ProtocolFeature = (typeof PROTOCOL_FEATURES)[number];
export type Article = (typeof ARTICLES)[number];
export type TeamMember = (typeof TEAM)[number];
