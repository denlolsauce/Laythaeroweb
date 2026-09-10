import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jet",
  display: "swap",
});

const serif = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif-display",
  display: "swap",
  style: ["normal", "italic"],
});

const description =
  "Layth Aero builds long-endurance autonomous aircraft for persistent maritime surveillance — holding station over the world's most contested water.";

export const metadata: Metadata = {
  title: "Layth Aero — Persistent Maritime Surveillance",
  description,
  metadataBase: new URL("https://laythaero.com"),
  openGraph: {
    title: "Layth Aero — Persistent Maritime Surveillance",
    description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#04070c",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
