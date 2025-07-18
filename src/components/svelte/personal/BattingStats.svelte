<script lang="ts">
    import type {BattingStatisticsEntry} from "../../../lib/model/BattingStatisticsEntry.ts";

    interface Props {
        statsBatting: BattingStatisticsEntry;
    }

    let {statsBatting}: Props = $props();
</script>

{#if statsBatting.summaries.length > 0}
    <div class="stats stats-vertical md:stats-horizontal shadow-md border">
        <div class="stat">
            <div class="stat-title">AVG</div>
            <div class="stat-value">
                {statsBatting.summaries[0].values.batting_average}
            </div>
            <div class="stat-desc">Batting Average</div>
        </div>
        <div class="stat">
            <div class="stat-title">OBP</div>
            <div class="stat-value">
                {statsBatting.summaries[0].values.on_base_percentage}
            </div>
            <div class="stat-desc">On Base Percentage</div>
        </div>
        <div class="stat">
            <div class="stat-title">SLG</div>
            <div class="stat-value">
                {statsBatting.summaries[0].values.slugging_percentage}
            </div>
            <div class="stat-desc">Slugging Percentage</div>
        </div>
        <div class="stat">
            <div class="stat-title">OPS</div>
            <div class="stat-value">
                {statsBatting.summaries[0].values.on_base_plus_slugging}
            </div>
            <div class="stat-desc">On Base Plus Slugging</div>
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
                <th>PA</th>
                <th>AB</th>
                <th>R</th>
                <th>RBI</th>
                <th>H</th>
                <th>2B</th>
                <th>3B</th>
                <th>HR</th>
                <th>K</th>
                <th>BB</th>
                <th>IBB</th>
                <th>HP</th>
                <th>SB</th>
                <th>CS</th>
                <th>SH</th>
                <th>SF</th>
                <th>I</th>
            </tr>
            </thead>
            <tbody>
            <!-- content rows -->
            {#each statsBatting.data as dataset}
                <tr>
                    <th>{dataset.league.season}</th>
                    <td>{dataset.league.name}</td>
                    <td>{dataset.values.games}</td>
                    <td>{dataset.values.games_started}</td>
                    <td>{dataset.values.plate_appearances}</td>
                    <td>{dataset.values.at_bats}</td>
                    <td>{dataset.values.runs}</td>
                    <td>{dataset.values.runs_batted_in}</td>
                    <td>{dataset.values.hits}</td>
                    <td>{dataset.values.doubles}</td>
                    <td>{dataset.values.triples}</td>
                    <td>{dataset.values.homeruns}</td>
                    <td>{dataset.values.strikeouts}</td>
                    <td>{dataset.values.base_on_balls}</td>
                    <td>{dataset.values.intentional_base_on_balls}</td>
                    <td>{dataset.values.hit_by_pitches}</td>
                    <td>{dataset.values.stolen_bases}</td>
                    <td>{dataset.values.caught_stealings}</td>
                    <td>{dataset.values.sacrifice_hits}</td>
                    <td>{dataset.values.sacrifice_flys}</td>
                    <td>{dataset.values.interferences}</td>
                </tr>
            {/each}
            </tbody>
        </table>
    </div>
{:else}
    <p>There seems to be no data available for the time being.</p>
{/if}