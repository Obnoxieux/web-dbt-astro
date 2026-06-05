<script lang="ts">
  import BattingStats from "./BattingStats.svelte";
  import PitchingStats from "./PitchingStats.svelte";
  import FieldingStats from "./FieldingStats.svelte";
  import { slide } from "svelte/transition";
  import { cubicIn } from "svelte/easing";
  import type { BattingStatisticsEntry } from "../../../lib/model/BattingStatisticsEntry.ts";
  import type { PitchingStatisticsEntry } from "../../../lib/model/PitchingStatisticsEntry.ts";
  import type { FieldingStatisticsEntry } from "../../../lib/model/FieldingStatisticsEntry.ts";
  import { StatsType } from "../../../lib/enums/StatsType.ts";

  interface Props {
    statsBatting: BattingStatisticsEntry;
    statsPitching: PitchingStatisticsEntry;
    statsFielding: FieldingStatisticsEntry;
  }

  let { statsBatting, statsPitching, statsFielding }: Props = $props();

  let activeStatsTab = $state(StatsType.batting);

  function changeStatsTab(type: StatsType) {
    activeStatsTab = type;
  }
</script>

<div class="prose">
  <h2>My Stats (career)</h2>
  <p>
    Baseball is a sport all about numbers. These are mine. Data is imported
    automatically via the
    <a
      class="link"
      href="https://bsm.baseball-softball.de/api_docs"
      target="_blank">API of the German Baseball & Softball Association</a
    >
  </p>

  <p>
    The data may not be 100% up to date as this is a static site and new data is
    only fetched on redeploy. Bleeding edge data can be found <a
      class="link"
      href="https://bsm.berlinskylarks.de"
      title="to Berlin Skylarks BSM data">here.</a
    >.
  </p>
</div>

<div class="tabs tabs-box" role="tablist">
  <button
    role="tab"
    onclick={() => changeStatsTab(StatsType.batting)}
    class="tab {activeStatsTab === StatsType.batting ? 'tab-active' : ''}"
    >Batting</button
  >
  <button
    role="tab"
    onclick={() => changeStatsTab(StatsType.pitching)}
    class="tab {activeStatsTab === StatsType.pitching ? 'tab-active' : ''}"
    >Pitching</button
  >
  <button
    role="tab"
    onclick={() => changeStatsTab(StatsType.fielding)}
    class="tab {activeStatsTab === StatsType.fielding ? 'tab-active' : ''}"
    >Fielding</button
  >
</div>

{#key activeStatsTab}
  <div in:slide={{ easing: cubicIn }} class="flex flex-col">
    {#if activeStatsTab === StatsType.batting}
      <BattingStats {statsBatting} />
    {:else if activeStatsTab === StatsType.pitching}
      <PitchingStats {statsPitching} />
    {:else}
      <FieldingStats {statsFielding} />
    {/if}
  </div>
{/key}

<style>
  .tabs-box {
    display: flex;
    justify-content: space-around;
    margin-block: var(--space-6);
    
    .tab-active {
      background-color: var(--color-skylarks-red);
      color: white !important;
    }
  }

  .tab {
    flex-grow: 1;
  }
</style>
