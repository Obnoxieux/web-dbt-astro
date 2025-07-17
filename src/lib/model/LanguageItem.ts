import type {LanguageType} from "svelte-highlight/languages";

export interface LanguageItem {
  languageType: LanguageType<string>,
  codeSample: string,
}