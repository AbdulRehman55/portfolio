import type { Metadata } from "next";
import { Instrument_Serif, Outfit } from "next/font/google";
import { content } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
});

const { site } = content;

export const metadata: Metadata = {
  title: `${site.name} · ${site.title}`,
  description: site.support,
  openGraph: {
    title: `${site.name} · ${site.title}`,
    description: site.headline,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrument.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
