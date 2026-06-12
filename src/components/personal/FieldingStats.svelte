<script lang="ts">
  import type { FieldingStatisticsEntry } from "../../lib/model/FieldingStatisticsEntry.ts";

  interface Props {
    statsFielding: FieldingStatisticsEntry;
  }

  let { statsFielding }: Props = $props();
</script>

{#if statsFielding.summaries.length > 0}
  <div class="card card-prominent stats stats-vertical md:stats-horizontal">
    <div class="stat">
      <div class="stat-title">G</div>
      <div class="stat-value">
        {statsFielding.summaries.at(0)?.values.games}
      </div>
      <div class="stat-desc">Games</div>
    </div>
    <div class="stat">
      <div class="stat-title">IP</div>
      <div class="stat-value">
        {statsFielding.summaries.at(0)?.values.innings_played}
      </div>
      <div class="stat-desc">Innings Played</div>
    </div>
    <div class="stat">
      <div class="stat-title">AVG</div>
      <div class="stat-value">
        {statsFielding.summaries.at(0)?.values.fielding_average}
      </div>
      <div class="stat-desc">Fielding Average</div>
    </div>
  </div>

  <div class="card card-prominent table-wrapper">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th>Season</th>
          <th>League</th>
          <th>G</th>
          <th>GS</th>
          <th>A</th>
          <th>PO</th>
          <th>E</th>
          <th>DP</th>
          <th>TP</th>
          <th>PB</th>
          <th>SB</th>
          <th>CS</th>
        </tr>
      </thead>
      <tbody>
        <!-- content rows -->
        {#each statsFielding.data as dataset}
          <tr>
            <th>{dataset.league.season}</th>
            <td>{dataset.league.name}</td>
            <td>{dataset.values.games}</td>
            <td>{dataset.values.games_started}</td>
            <td>{dataset.values.assists}</td>
            <td>{dataset.values.putouts}</td>
            <td>{dataset.values.errors}</td>
            <td>{dataset.values.double_plays}</td>
            <td>{dataset.values.triple_plays}</td>
            <td>{dataset.values.passed_balls}</td>
            <td>{dataset.values.stolen_bases}</td>
            <td>{dataset.values.caught_stealings}</td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
  <!--    <p>Add position chart here</p>-->
{:else}
  <p>There seems to be no data available for the time being.</p>
{/if}

<style>
  .card {
    margin-block: var(--space-4);
  }
</style>