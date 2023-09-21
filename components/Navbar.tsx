import { Locale } from "@/i18n.config";
import React from "react";
import LocaleSwitcher from "./locale-switcher";
import { getDictionary } from "@/lib/dictionaries";

async function Navbar({ lang }: { lang: Locale }) {
  const { menu } = await getDictionary(lang);

  return (
    <div className="container m-auto py-5">
      <div className="flex flex-col gap-4 text-center text-lg md:flex-row ">
        <div className="flex-1">
          <a
            href="#about"
            className="border-b-2 border-blue-500 px-2 hover:text-blue-500 hover:scale-105 py-2 mx-4"
          >
            {menu.about}
          </a>
          <a
            href="#skills"
            className="border-b-2 border-blue-500 px-2 hover:text-blue-500 hover:scale-105 py-2 mx-4"
          >
            {menu.skills}
          </a>
          <a
            href="#projects"
            className="border-b-2 border-blue-500 px-2 hover:text-blue-500 hover:scale-105 py-2 mx-4"
          >
            {menu.projects}
          </a>
        </div>

        <LocaleSwitcher lang={lang} />
      </div>
    </div>
  );
}

export default Navbar;
