import type { CollectionEntry, InferEntrySchema } from "astro:content";
import { createSignal, For, type Component } from "solid-js";
import "../../../styles/sections/projectFilter.css";
import { ProjectCard } from "./ProjectCard";

interface Props {
  projects: CollectionEntry<"projects">[];
  languages: InferEntrySchema<"languages">[];
  frameworks: InferEntrySchema<"frameworks">[];
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
                <img src={language.icon.src} alt={language.name}></img>
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
                <img src={framework.icon.src} alt={framework.name}></img>
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
