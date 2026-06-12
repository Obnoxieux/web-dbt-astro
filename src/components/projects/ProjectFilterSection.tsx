import { createMemo, createSignal, For, type Component } from "solid-js";
import type { ProjectDTO } from "../../lib/model/ProjectDTO";
import "../../styles/sections/projectFilter.css";
import { ProjectCard } from "./ProjectCard";
import type { TechnologyDTO } from "../../lib/model/TechnologyDTO";

interface Props {
  projects: ProjectDTO[];
  languages: TechnologyDTO[];
  frameworks: TechnologyDTO[];
}

export const ProjectFilterSection: Component<Props> = (props) => {
  const [filteredLanguage, setFilteredLanguage] = createSignal("all");
  const [filteredFramework, setFilteredFramework] = createSignal("all");

  const filteredProjects = createMemo(() => {
    return props.projects
      .filter((project) => {
        if (filteredLanguage() === "all") {
          return true;
        }
        return project.languages
          .map((lang) => lang.id)
          .includes(filteredLanguage());
      })
      .filter((project) => {
        if (filteredFramework() === "all") {
          return true;
        }
        return project.frameworks
          .map((framework) => framework.id)
          .includes(filteredFramework());
      });
  });

  return (
    <div>
      <h2>Languages</h2>
      <ul class="filter-grid unstyled">
        <button
          class="filter-button all"
          classList={{ active: filteredLanguage() === "all" }}
          onClick={() => {
            setFilteredLanguage("all");
          }}
        >
          All
        </button>
        <For each={props.languages}>
          {(language) => (
            <li>
              <button
                class="filter-button"
                classList={{ active: filteredLanguage() === language.id }}
                onClick={() => {
                  setFilteredLanguage(language.id);
                }}
              >
                <img src={language.src} alt={language.name}></img>
              </button>
            </li>
          )}
        </For>
      </ul>

      <h2>Technologies</h2>
      <ul class="filter-grid unstyled">
        <button
          class="filter-button all"
          classList={{ active: filteredFramework() === "all" }}
          onClick={() => {
            setFilteredFramework("all");
          }}
        >
          All
        </button>
        <For each={props.frameworks}>
          {(framework) => (
            <li>
              <button
                class="filter-button"
                classList={{ active: filteredFramework() === framework.id }}
                onClick={() => {
                  setFilteredFramework(framework.id);
                }}
              >
                <img src={framework.src} alt={framework.name}></img>
              </button>
            </li>
          )}
        </For>
      </ul>

      <h2>Projects</h2>
      <ul class="project-grid unstyled">
        <For each={filteredProjects()}>
          {(project) => (
            <li>
              <ProjectCard project={project} />
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
