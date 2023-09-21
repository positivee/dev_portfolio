import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";

import { Locale } from "@/i18n.config";

const outfit = Outfit({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web developer, SEO Specialist - Kamil ",

  robots: {
    index: false,
    follow: false,
  },
};

export async function generateStaticParams() {
  return [{ lang: "en-US" }, { lang: "pl" }];
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={params.lang} className="scroll-smooth ">
      <body className={outfit.className}>
        <Navbar lang={params.lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
