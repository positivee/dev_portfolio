import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import React from "react";

async function BackgroundSection({ lang }: { lang: Locale }) {
  const { background } = await getDictionary(lang);

  return (
    <div className="md:px-44 md:flex md:gap-14" id="about">
      <h2 className="uppercase text-3xl text-blue-500 mb-2 md:w-1/4">
        {background.heading}
      </h2>
      <div className="text-lg space-y-4  md:w-3/4">
        <p>{background.description_1}</p>
        <p>{background.description_2}</p>
        <p>{background.description_3}</p>
      </div>
    </div>
  );
}

export default BackgroundSection;
