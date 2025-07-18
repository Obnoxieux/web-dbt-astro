<script lang="ts">
    import type {PitchingStatisticsEntry} from "../../../lib/model/PitchingStatisticsEntry.ts";

    interface Props {
        statsPitching: PitchingStatisticsEntry;
    }

    let {statsPitching}: Props = $props();
</script>

{#if statsPitching.summaries.length > 0}
    <div class="stats stats-vertical md:stats-horizontal shadow-md border">
        <div class="stat">
            <div class="stat-title">W - L</div>
            <div class="stat-value">
                {`${statsPitching.summaries[0].values.wins} - ${statsPitching.summaries[0].values.losses}`}
            </div>
            <div class="stat-desc">Record</div>
        </div>
        <div class="stat">
            <div class="stat-title">IP</div>
            <div class="stat-value">
                {statsPitching.summaries[0].values.innings_pitched}
            </div>
            <div class="stat-desc">Innings Pitched</div>
        </div>
        <div class="stat">
            <div class="stat-title">ERA</div>
            <div class="stat-value">
                {statsPitching.summaries[0].values.earned_runs_average}
            </div>
            <div class="stat-desc">Earned Run Average</div>
        </div>
        <div class="stat">
            <div class="stat-title">WHIP</div>
            <div class="stat-value">
                {statsPitching.summaries[0].values.walks_and_hits_per_innings_pitched}
            </div>
            <div class="stat-desc">Walks & Hits per Innings Pitched</div>
        </div>
    </div>

    <div class="overflow-x-auto shadow-md rounded-2xl border">
        <table class="table">
            <!-- head -->
            <thead>
            <tr>
                <th>Season</th>
                <th>League</th>
                <th>G</th>
                <th>GS</th>
                <th>BF</th>
                <th>AB</th>
                <th>R</th>
                <th>ER</th>
                <th>H</th>
                <th>2B</th>
                <th>3B</th>
                <th>HR</th>
                <th>K</th>
                <th>BB</th>
                <th>IBB</th>
                <th>HP</th>
                <th>WP</th>
                <th>I</th>
                <th>BK</th>
                <th>SV</th>
            </tr>
            </thead>

            <tbody>
            <!-- content rows -->
            {#each statsPitching.data as dataset}
                <tr>
                    <th>{dataset.league.season}</th>
                    <td>{dataset.league.name}</td>
                    <td>{dataset.values.games}</td>
                    <td>{dataset.values.games_started}</td>
                    <td>{dataset.values.batters_faced}</td>
                    <td>{dataset.values.at_bats}</td>
                    <td>{dataset.values.runs}</td>
                    <td>{dataset.values.earned_runs}</td>
                    <td>{dataset.values.hits}</td>
                    <td>{dataset.values.doubles}</td>
                    <td>{dataset.values.triples}</td>
                    <td>{dataset.values.homeruns}</td>
                    <td>{dataset.values.strikeouts}</td>
                    <td>{dataset.values.base_on_balls_allowed}</td>
                    <td>{dataset.values.intentional_base_on_balls}</td>
                    <td>{dataset.values.hit_by_pitches}</td>
                    <td>{dataset.values.wild_pitches}</td>
                    <td>{dataset.values.interferences}</td>
                    <td>{dataset.values.balks}</td>
                    <td>{dataset.values.saves}</td>
                </tr>
            {/each}
            </tbody>

        </table>
    </div>
{:else}
    <p>There seems to be no data available for the time being.</p>
{/if}