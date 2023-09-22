import BackgroundSection from "@/components/BackgroundSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillSection from "@/components/SkillSection";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import { BsLinkedin, BsGithub } from "react-icons/bs";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const { banner } = await getDictionary(lang);

  return (
    <div className="container m-auto space-y-20 p-4 text-center md:text-left  ">
      <div className="min-h-[35vh] pt-40 md:pt-20 flex flex-col justify-center  ">
        <p className="text-2xl  md:text-4xl max-w-2xl leading-relaxed	">
          {banner.text_before}
          <strong className="text-blue-500 "> Kamil Biernacki</strong>
          {banner.text_after}
        </p>
        <div className="mt-12 text-lg">
          {banner.call}{" "}
          <a
            href="mailto: biero.kamil@gmail.com"
            className="border-b-2 border-blue-500 hover:text-blue-500 "
          >
            biero.kamil@gmail.com
          </a>
          <div className="flex gap-4 mt-4 justify-center md:justify-normal">
            <a
              href="https://github.com/positivee"
              target="_blank"
              className="hover:text-blue-500 hover:scale-105"
            >
              <BsGithub className="h-8 w-8" />
            </a>
            <a
              href="#"
              target="_blank"
              className="hover:text-blue-500 hover:scale-105"
            >
              <BsLinkedin className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>

      <BackgroundSection lang={lang} />
      <SkillSection lang={lang} />
      <ProjectsSection lang={lang} />
    </div>
  );
}
