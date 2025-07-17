<script lang="ts">
    import CodeTabs from "./CodeTabs.svelte";
    import CodeBlock from "./CodeBlock.svelte";
    import {Language} from "../../../lib/enums/Language.ts";
    import type {LanguageItem} from "../../../lib/model/LanguageItem.ts";
    import {codeSamples} from "../../../lib/codeSamples.ts";

    let lang: LanguageItem = $state(codeSamples.typescript)

    function callback(language: Language) {
        switch (language) {
            case Language.typescript:
                lang = codeSamples.typescript
                break
            case Language.kotlin:
                lang = codeSamples.kotlin
                break
            case Language.swift:
                lang = codeSamples.swift
                break
            case Language.php:
                lang = codeSamples.php
                break
        }
    }
</script>

<div class="card lg:card-side w-full bg-base-200 border-2 border-neutral-content shadow-xl my-4">
    <div class="card-body">
        <div class="grid grid-cols-1 lg:grid-cols-3 items-center">
            <div>
                <h2 class="card-title">Languages</h2>
                <p class="my-3">that I use and sometimes love</p>
                <CodeTabs {callback}/>
            </div> 
            <CodeBlock lang={lang}/>
        </div>
    </div>
  </div>
