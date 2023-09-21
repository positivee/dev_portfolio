"use client";
import { Locale } from "@/i18n.config";
import React, { useEffect, useState } from "react";
import LocaleSwitcher from "./locale-switcher";

function Navbar({ lang, menuText }: { lang: Locale; menuText: any }) {
  const [shadowOnScroll, setShadowOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 180) {
        setShadowOnScroll(true);
      } else {
        setShadowOnScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`w-full  py-5 fixed bg-white ${
        shadowOnScroll && `drop-shadow-md transition duration-700 ease-in-out`
      } `}
    >
      <div className="container m-auto flex flex-col gap-4 text-center items-center text-lg md:flex-row ">
        <div className="flex-1">
          <a
            href="#about"
            className="border-b-2 border-blue-500 px-2 hover:text-blue-500 hover:scale-105 py-2 mx-4"
          >
            {menuText.about}
          </a>
          <a
            href="#skills"
            className="border-b-2 border-blue-500 px-2 hover:text-blue-500 hover:scale-105 py-2 mx-4"
          >
            {menuText.skills}
          </a>
          <a
            href="#projects"
            className="border-b-2 border-blue-500 px-2 hover:text-blue-500 hover:scale-105 py-2 mx-4"
          >
            {menuText.projects}
          </a>
        </div>

        <LocaleSwitcher lang={lang} />
      </div>
    </div>
  );
}

export default Navbar;
