import React from "react";

import { AiFillHtml5, AiOutlineApi } from "react-icons/ai";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaNpm, FaCss3Alt, FaWordpressSimple } from "react-icons/fa";
import {
  BiLogoTailwindCss,
  BiLogoGit,
  BiLogoTypescript,
  BiDevices,
} from "react-icons/bi";
import {
  SiNextdotjs,
  SiPhp,
  SiRedux,
  SiStyledcomponents,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { getDictionary } from "@/lib/dictionaries";
import { Locale } from "@/i18n.config";

type Skills = {
  [key: string]: JSX.Element;
};

const skills: Skills = {
  HTML: <AiFillHtml5 className="h-20 w-20" />,
  CSS: <FaCss3Alt className="h-20 w-20" />,
  JavaScript: <RiJavascriptFill className="h-20 w-20" />,
  TypeScript: <BiLogoTypescript className="h-20 w-20" />,
  React: <FaReact className="h-20 w-20" />,
  Redux: <SiRedux className="h-20 w-20" />,
  NextJS: <SiNextdotjs className="h-20 w-20" />,
  Tailwind: <BiLogoTailwindCss className="h-20 w-20" />,
  StyledComponents: <SiStyledcomponents className="h-20 w-20" />,
  NPM: <FaNpm className="h-20 w-20" />,
  Git: <BiLogoGit className="h-20 w-20" />,
  PHP: <SiPhp className="h-20 w-20" />,
  Wordpress: <FaWordpressSimple className="h-20 w-20" />,
  VSCode: <TbBrandVscode className="h-20 w-20" />,
  "Restful API's": <AiOutlineApi className="h-20 w-20" />,
  "Responsive Design": <BiDevices className="h-20 w-20" />,
};

async function SkillSection({ lang }: { lang: Locale }) {
  const { skills: skillsText } = await getDictionary(lang);

  return (
    <div
      className="md:px-26 lg:px-44 md:flex md:justify-between md:gap-14"
      id="skills"
    >
      <h2 className="uppercase text-3xl text-blue-500 mb-2 md:w-1/4">
        {skillsText.heading}
      </h2>

      <div className="text-lg md:w-3/4">
        <p className="mb-4">{skillsText.intro}</p>
        <div className=" grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
          {Object.keys(skills).map((skill, index) => (
            <div
              key={index}
              className="grid place-items-center text-black/80 hover:text-blue-500 hover:scale-105 text-center"
            >
              {skills[skill]}
              <p>{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
