import Footer from "@/components/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import Navbar from "@/components/Navbar";

import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";

const outfit = Outfit({ weight: ["400", "600"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web developer, SEO Specialist - Kamil ",

  robots: {
    index: false,
    follow: false,
  },
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "pl" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const { menu } = await getDictionary(params.lang);

  return (
    <html
      lang={params.lang}
      className="scroll-smooth scroll-pt-32 md:scroll-pt-24"
    >
      <body className={outfit.className}>
        <Navbar menuText={menu} lang={params.lang} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
