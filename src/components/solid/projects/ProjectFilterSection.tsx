import type { InferEntrySchema } from "astro:content";
import { createSignal, For, type Component } from "solid-js";
import type { ProjectDTO } from "../../../lib/model/ProjectDTO";
import "../../../styles/sections/projectFilter.css";
import { ProjectCard } from "./ProjectCard";
import type { TechnologyDTO } from "../../../lib/model/TechnologyDTO";

interface Props {
  projects: ProjectDTO[];
  languages: TechnologyDTO[];
  frameworks: TechnologyDTO[];
}

export const ProjectFilterSection: Component<Props> = (props) => {
  const [filteredLanguage, setFilteredLanguage] = createSignal(null);
  const [filteredFramework, setFilteredFramework] = createSignal(null);

  return (
    <div>
      <h2>Languages</h2>
      <ul class="filter-grid unstyled">
        <For each={props.languages}>
          {(language) => (
            <li>
              <button class="filter-button">
                <img src={language.src} alt={language.name}></img>
              </button>
            </li>
          )}
        </For>
      </ul>

      <h2>Frameworks</h2>
      <ul class="filter-grid unstyled">
        <For each={props.frameworks}>
          {(framework) => (
            <li>
              <button class="filter-button">
                <img src={framework.src} alt={framework.name}></img>
              </button>
            </li>
          )}
        </For>
      </ul>

      <h2>Projects</h2>
      <ul class="project-grid unstyled">
        <For each={props.projects}>
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
