<script lang="ts">
    import type {GitHubRepo} from "$lib/model/GitHubRepo";

    interface Props {
        repo: GitHubRepo;
        color?: string;
    }

    let { repo, color = "warning" }: Props = $props();
</script>

<section>
    <h2 class="subheader col-span-4 text-{color} mb-3">Links</h2>
    <div class="col-span-4 flex gap-2 md:gap-4">
        {#if repo.homepage !== "" && repo.homepage !== null}
            <a href="{repo.homepage}" target="_blank" role="button" class="btn btn-neutral">Homepage</a>
        {/if}
        <a href="{repo.html_url}" target="_blank" role="button" class="btn btn-neutral">Repository</a>
    </div>
</section>