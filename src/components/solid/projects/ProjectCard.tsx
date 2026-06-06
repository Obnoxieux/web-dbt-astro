import type { CollectionEntry } from "astro:content";
import { For, type Component } from "solid-js";

interface Props {
  project: CollectionEntry<"projects">;
}

export const ProjectCard: Component<Props> = (props) => {
  return (
    <article class="card project-card">
      <h3 class="card-title">{props.project.data.name}</h3>
      <p>{props.project.data.description}</p>
      <div class="flex justify-between items-center">
        <ul class="unstyled">
          <For each={props.project.data.languages}>
            {(lang) => <li class="badge outline">{lang.id}</li>}
          </For>
        </ul>
        <a
          class="button small"
          href={`/projects/${props.project.id}`}
          title="detail page for project"
        >
          Details
        </a>
      </div>
    </article>
  );
};
