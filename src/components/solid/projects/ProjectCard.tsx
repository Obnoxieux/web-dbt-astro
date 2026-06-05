import type { InferEntrySchema } from "astro:content";
import { For, type Component } from "solid-js";

interface Props {
  project: InferEntrySchema<"projects">;
}

export const ProjectCard: Component<Props> = (props) => {
  return (
    <article class="card project-card">
      <h2 class="card-title">{props.project.name}</h2>
      <p>{props.project.description}</p>
      <div class="flex justify-end items-center">
        <ul>
          <For each={props.project.languages}>
            {(lang) => <li class="badge">{lang.id}</li>}
          </For>
        </ul>
      </div>
    </article>
  );
};
