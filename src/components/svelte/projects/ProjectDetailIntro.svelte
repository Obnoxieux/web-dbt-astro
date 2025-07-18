<script lang="ts">
    import type {GitHubRepo} from "../../../lib/model/GitHubRepo.ts";

    interface Props {
        repo: GitHubRepo;
    }

    let { repo }: Props = $props();
</script>

<section>
    <div class="indicator">
        {#if repo.archived === true}
            <span class="indicator-item badge badge-neutral">Archive</span>
        {/if}
        <h1 class="h1 pt-3">{repo.name}</h1>
    </div>
    <div class="mt-4 max-w-3xl space-y-6">
        {repo.description ?? "The repository does not have a description."}
    </div>
</section>