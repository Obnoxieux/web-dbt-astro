import type { CodeLanguage } from "astro";

export type CodeSampleItem = {
  id: CodeLanguage;
  name: string;
  sample: string;
};
