<script lang="ts">
  import {Language} from "$lib/enums/Language";

  interface Props {
    callback: (language: Language) => void
  }
  let {callback}: Props = $props()

  let activeTab = $state(Language.typescript)

  function changeLanguage(language: Language) {
    activeTab = language

    callback(language)
  }
</script>

<div class="flex lg:max-w-[95%]">
  <div role="tablist" class="tabs tabs-lifted my-8 border-2 rounded-lg border-neutral-content">
    <div class="grid grid-cols-2 xl:grid-cols-4">
      <button onclick={() => changeLanguage(Language.typescript)} role="tab" class="tab tab-lg {activeTab === Language.typescript ? 'tab-active' : ''}">TypeScript</button>
      <button onclick={() => changeLanguage(Language.swift)} role="tab" class="tab tab-lg {activeTab === Language.swift ? 'tab-active' : ''}">Swift</button>
      <button onclick={() => changeLanguage(Language.kotlin)} role="tab" class="tab tab-lg {activeTab === Language.kotlin ? 'tab-active' : ''}">Kotlin</button>
      <button onclick={() => changeLanguage(Language.php)} role="tab" class="tab tab-lg {activeTab === Language.php ? 'tab-active' : ''}">PHP</button>
    </div>
  </div>
</div>

<style lang="postcss">
  .tab {
    @apply rounded-lg;
  }

  .tab-active {
    @apply bg-neutral;
    @apply text-neutral-content;
  }
</style>