import type { InferEntrySchema } from "astro:content";
import { createSignal, For, type Component } from "solid-js";
import "../../../styles/sections/projectFilter.css"

interface Props {
  projects: InferEntrySchema<"projects">[];
  languages: InferEntrySchema<"languages">[];
  frameworks: InferEntrySchema<"frameworks">[];
}

export const ProjectFilterSection: Component<Props> = (props) => {
  const [filteredLanguage, setFilteredLanguage] = createSignal(null);
  const [filteredFramework, setFilteredFramework] = createSignal(null);

  return (
    <div>
      <ul class="filter-grid unstyled">
        <For each={props.languages}>
          {(language) => (
            <li>
              <button class="filter-button">
                <img src={language.icon.src}></img>
              </button>
            </li>
          )}
        </For>
      </ul>

      <ul class="filter-grid unstyled">
        <For each={props.frameworks}>
          {(framework) => (
            <li>
              <button class="filter-button">
                <img src={framework.icon.src}></img>
              </button>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
