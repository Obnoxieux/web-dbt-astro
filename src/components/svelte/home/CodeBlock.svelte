<script lang="ts">
  import Highlight, {LineNumbers} from "svelte-highlight";
  import githubDark from "svelte-highlight/styles/github-dark";
  import {cubicIn} from "svelte/easing";
  import {fly} from 'svelte/transition';
  import {codeSamples} from "../../../lib/codeSamples.ts";
  import type {LanguageItem} from "../../../lib/model/LanguageItem.ts";

  interface Props {
    lang: LanguageItem,
  }

  let {lang = codeSamples.typescript}: Props = $props();
</script>

<svelte:head>
  {@html githubDark}
</svelte:head>

{#key lang}
  <div in:fly={{x: -50, easing: cubicIn}} class="mockup-code col-span-2 min-h-[640px]">

    <Highlight language={lang.languageType} code={lang.codeSample}>

      {#snippet children({highlighted})}
        <LineNumbers {highlighted}/>
      {/snippet}

    </Highlight>

  </div>
{/key}