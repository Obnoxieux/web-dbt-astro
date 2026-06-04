import type { InferEntrySchema } from "astro:content";
import { createSignal, For, type Component } from "solid-js";

interface Props {
  projects: any[];
  languages: InferEntrySchema<"languages">[];
  frameworks: InferEntrySchema<"frameworks">[];
}

export const ProjectFilterSection: Component<Props> = (props) => {
  const [filteredLanguage, setFilteredLanguage] = createSignal(null);
  const [filteredFramework, setFilteredFramework] = createSignal(null);

  return (
    <div>
      <ul class="flex gap-2">
        <For each={props.languages}>
          {(language) => (
            <li>
              <button class="bg-base-200 p-4">
                <img width="60" src={language.icon.src}></img>
              </button>
            </li>
          )}
        </For>
      </ul>

      <ul class="flex gap-2">
        <For each={props.frameworks}>
          {(framework) => (
            <li>
              <button class="bg-base-200 p-4">
                <img width="60" src={framework.icon.src}></img>
              </button>
            </li>
          )}
        </For>
      </ul>
    </div>
  );
};
