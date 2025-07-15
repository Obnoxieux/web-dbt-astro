<script lang="ts">
    import CodeTabs from "./CodeTabs.svelte";
    import CodeBlock from "./CodeBlock.svelte";
    import { Language } from "$lib/enums/Language";
    import { languages } from "$lib/codeSamples";
    import type {LanguageItem} from "$lib/model/LanguageItem";

    let lang: LanguageItem = $state(languages.typescript)

    function callback(language: Language) {
        switch (language) {
            case Language.typescript:
                lang = languages.typescript
                break
            case Language.kotlin:
                lang = languages.kotlin
                break
            case Language.swift:
                lang = languages.swift
                break
            case Language.php:
                lang = languages.php
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
