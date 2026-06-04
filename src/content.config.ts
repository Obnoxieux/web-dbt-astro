import { defineCollection, reference } from "astro:content";
import { file, glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./blog" }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const languages = defineCollection({
  loader: file("./src/data/languages.toml"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      name: z.string(),
      sample: z.string(),
      icon: image(),
      color: z.string(),
    }),
});

const frameworks = defineCollection({
  loader: file("./src/data/frameworks.toml"),
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      name: z.string(),
      description: z.string().optional(),
      icon: image(),
      color: z.string(),
    }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    repositoryURL: z.string(),
    languages: z.array(reference("languages")),
    frameworks: z.array(reference("frameworks")),
  }),
});

export const collections = { blog, languages, frameworks, projects };
