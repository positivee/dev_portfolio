"use client";

import { Locale, i18n } from "@/i18n.config";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { BsGlobeAsiaAustralia } from "react-icons/bs";

function LocaleSwitcher({ lang }: { lang: Locale }) {
  const pathName = usePathname();
  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";
    const segments = pathName.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <div className="flex justify-center py-2 ">
      <BsGlobeAsiaAustralia className="h-6 w-6 text-black/80 " />
      {i18n.locales.map((locale) => {
        return (
          <Link
            key={locale}
            href={redirectedPathName(locale)}
            className={` px-2 hover:scale-105 uppercase ${
              lang === locale && "font-semibold text-blue-500 "
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}

export default LocaleSwitcher;
