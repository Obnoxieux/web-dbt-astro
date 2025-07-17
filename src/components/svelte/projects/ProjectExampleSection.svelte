<script lang="ts">
  import type {GitHubRepo} from "../../../lib/model/GitHubRepo.ts";
  import {ColorUtility} from "../../../lib/classes/ColorUtility.ts";
  import {cubicOut} from "svelte/easing";
  import {fly} from "svelte/transition";
  import ProjectCard from "./ProjectCard.svelte";

  interface Props {
    repos: GitHubRepo[];
    languages: string[];
  }

  let { repos, languages }: Props = $props();

  let filters = new Set<string>();
  filters.add("All");
  languages.forEach((language: string) => filters.add(language));
  let filteredRepos: GitHubRepo[] = $state(repos);

  let shownLanguage: string = $state("All");

  function toggleFilter(filter: string) {
    shownLanguage = filter;
    if (filter === "All") {
      filteredRepos = repos;
    } else {
      filteredRepos = repos.filter((repo: GitHubRepo) => repo.language === filter);
    }
  }
</script>

<section id="project-examples">
  <div class="flex flex-wrap mb-5 md:mb-10 gap-2 md:gap-4 items-center">
    <div class="h2">Filter by Language:</div>
    {#each filters as filter}
      <button
              onclick={() => toggleFilter(filter)}
              class="filter-button btn btn-sm md:btn-md"
              class:btn-neutral={filter === shownLanguage}
              class:btn-outline={filter !== shownLanguage}
      >
        {filter}
      </button>
    {/each}
  </div>
  <div class="grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-9">
    {#each filteredRepos as repo, index}
      {#key filteredRepos}
        <div in:fly|global={{y: 50, duration: index * 300 + 100, delay: 200, easing: cubicOut}}>
          <ProjectCard {repo} color={ColorUtility.determineColor(repo.language)}/>
        </div>
      {/key}
    {/each}
  </div>
</section>