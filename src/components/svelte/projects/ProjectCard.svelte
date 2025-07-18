<script lang="ts">
    import type {GitHubRepo} from "../../../lib/model/GitHubRepo.ts";

    interface Props {
        repo: GitHubRepo;
        color: string;
    }

    let { repo, color }: Props = $props();

    /**
     * Tailwind CSS class names to please its compiler
     * badge-accent badge-primary badge-secondary badge-warning
     */
</script>

<div class="card w-full h-full bg-base-200 border-2 border-neutral-content shadow-xl hover:scale-105">
    <div class="card-body">
        <h2 class="card-title">{repo.name}</h2>
        <p>{repo.description}</p>
        <div class="card-actions justify-between items-center flex-nowrap">
            <div class="badge badge-lg badge-{color} dark:badge-outline">{repo.language}</div>
            <a href="projects/{repo.name}" class="btn btn-outline">Details</a>
        </div>
    </div>
</div>