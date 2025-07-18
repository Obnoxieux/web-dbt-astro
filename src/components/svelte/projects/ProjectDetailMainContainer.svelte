<script lang="ts">
    import type {GitHubRepo} from "../../../lib/model/GitHubRepo.ts";

    interface Props {
        repo: GitHubRepo;
        color?: string;
    }

    let { repo, color = "warning" }: Props = $props();

    const createdDate = new Date(repo.created_at).toLocaleString()
    const updatedDate = new Date(repo.updated_at).toLocaleString()
</script>

<h2 class="subheader col-span-4 mb-6 text-{color}">General Info</h2>
<section id="project-stats" class="grid grid-cols-4 gap-6 border-2 border-neutral-content rounded-2xl shadow-xl p-4 lg:p-5 xl:p-7">
    <div class="mini-headline">Language</div>
    <div class="col-span-3">{repo.language}</div>
    <div class="mini-headline">Tags</div>
    <div class="col-span-3 gap-2 flex flex-wrap">
        {#if repo.topics.length > 0}
            {#each repo.topics as topic}
                <div class="badge badge-lg badge-outline">{topic}</div>
            {/each}
        {:else}
            <div>This project doesn't have any associated tags.</div>
        {/if}
    </div>
    <div class="mini-headline">License</div>
    <div class="col-span-3">{repo.license?.name ?? "No license provided"}</div>
    <div class="mini-headline">Stats</div>
    <div class="col-span-3">
        <div class="stats stats-vertical md:stats-horizontal shadow-md border">
            <div class="stat">
                <div class="stat-figure">
                    <svg class="fill-{color}" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M330.666-215.499 480-305l149.334 90.334L589.5-384l131.668-114-173.334-15.5L480-673.501l-67.504 159.618L239.166-499l131.667 113.833-40.167 169.668ZM235.5-83.333 300-361.728 84-548.667 369.167-573.5 480-835.833 591.167-573.5 876-548.667 659.989-361.728l64.802 278.395-244.646-147.74L235.5-83.333ZM480-434Z"/></svg>
                </div>
                <div class="stat-title">Stars</div>
                <div class="stat-value">{repo.stargazers_count}</div>
            </div>
            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg class="fill-{color}" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="M1.833-241.833v-54.5q0-39.545 41.834-64.189 41.833-24.644 109.917-24.644 13.777 0 25.899.75 12.121.75 23.017 2.474-9.833 18.332-14.5 37.275-4.667 18.943-4.667 39.533v63.301H1.833Zm240 0v-63.233q0-31.13 17-57.615 17-26.486 49.167-45.986 32.167-19.5 76.116-29.666 43.95-10.167 95.575-10.167 52.618 0 96.797 10.167 44.179 10.166 76.179 29.666t48.916 45.866Q718.5-336.435 718.5-305v63.167H241.833Zm534.834 0v-63.215q0-20.693-4.417-39.822-4.417-19.13-13.583-37.022 11-1.789 22.864-2.532 11.865-.742 25.136-.742 68.166 0 110 24.271 41.833 24.272 41.833 64.572v54.49H776.667Zm-470.501-63.333H654.5v-4q-2.999-33.001-51.999-54.501-49.001-21.5-122.251-21.5t-122.417 21.5q-49.167 21.5-51.667 55.167v3.334ZM153.078-421.833q-29.411 0-50.328-21.026t-20.917-50.552q0-29.921 21.027-50.838 21.026-20.917 50.552-20.917 29.921 0 50.838 20.893 20.916 20.892 20.916 51.195 0 29.412-20.892 50.329-20.892 20.916-51.196 20.916Zm653.334 0q-29.412 0-50.328-21.026-20.917-21.026-20.917-50.552 0-29.921 21.026-50.838 21.027-20.917 50.553-20.917 29.921 0 50.837 20.893 20.917 20.892 20.917 51.195 0 29.412-20.892 50.329-20.893 20.916-51.196 20.916Zm-326.591-60q-49.154 0-83.571-34.476-34.417-34.475-34.417-83.726 0-49.798 34.476-84.132 34.475-34.333 83.726-34.333 49.798 0 84.132 34.271 34.333 34.27 34.333 84.408 0 49.154-34.271 83.571-34.27 34.417-84.408 34.417Zm.663-63.333q22.849 0 38.766-15.901 15.917-15.901 15.917-39.417 0-22.849-15.985-38.766-15.985-15.917-38.948-15.917-23.067 0-39.068 15.985-16 15.985-16 38.948 0 23.067 15.901 39.068 15.901 16 39.417 16Zm-.151 240ZM480-600Z"/></svg>
                </div>
                <div class="stat-title">Watchers</div>
                <div class="stat-value">{repo.watchers_count}</div>
            </div>
            <div class="stat">
                <div class="stat-figure text-secondary">
                    <svg class="fill-{color}" xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 -960 960 960" width="40"><path d="m242.5-166.667 38.833-154.5H126.667l15.999-63.333h154.667l48-191.334H190.667l16-63.333h154.666l38.5-154.166H462.5L424-639.167h192l38.5-154.166h62.667l-38.5 154.166h154.666l-16 63.333H662.667l-48 191.334h154.666l-16 63.333H598.667l-38.834 154.5h-62.666L536-321.167H344l-38.834 154.5H242.5ZM359.999-384.5H552l48-191.334H408L359.999-384.5Z"/></svg>
                </div>
                <div class="stat-title">Open Issues</div>
                <div class="stat-value">{repo.open_issues_count}</div>
            </div>
        </div>
    </div>
    <div class="mini-headline">Created</div>
    <div class="col-span-3">{createdDate}</div>
    <div class="mini-headline">Updated</div>
    <div class="col-span-3">{updatedDate}</div>
    <div class="mini-headline">Archived</div>
    <div class="col-span-3">{repo.archived ? "Yes" : "No"}</div>
</section>