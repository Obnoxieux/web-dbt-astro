import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({pattern: '**/*.md', base: './blog'}),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  })
});

export const collections = { blog };