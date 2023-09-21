import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { Locale } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";

async function ProjectsSection({ lang }: { lang: Locale }) {
  const { projectsText } = await getDictionary(lang);
  return (
    <div className="md:px-26 lg:px-44 md:flex md:gap-14" id="projects">
      <h2 className="uppercase text-3xl text-blue-500 mb-2 md:w-1/4">
        {projectsText.heading}
      </h2>

      <div className="text-lg md:w-3/4 space-y-8">
        <p className="mb-4">{projectsText.intro}</p>
        {projectsText.projects.map((project, index) => {
          return (
            <div className=" space-y-4" key={index}>
              <div className="flex justify-between">
                <a
                  href={project.github}
                  target="blank"
                  className="flex gap-2 text-xl text-black/80 hover:scale-105"
                >
                  <h3 className="font-semibold">{project.name}</h3>
                  <BsGithub className="h-6 w-6" />
                </a>
                {project?.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    className="uppercase text-blue-500/80 font-semibold flex justify-center items-center hover:scale-105"
                  >
                    Live demo
                    <FiArrowUpRight className="h-6 w-6" />
                  </a>
                )}
              </div>
              <p>{project.description}</p>
              <div className="flex gap-2 flex-wrap justify-center md:justify-normal">
                {project.tags.map((tag) => (
                  <div
                    key={tag}
                    className="font-semibold text-blue-500 px-3 border-blue-500 border-2 rounded-md"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        <a
          href="https://github.com/positivee"
          target="_blank"
          className="block text-2xl text-center py-4 hover:underline hover:scale-105"
        >
          {projectsText.more}
        </a>
      </div>
    </div>
  );
}

export default ProjectsSection;
