import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    year: z.number(),
    category: z.string(),
    cover: z.string(),
    paper: z.string().url().optional(),
    code: z.string().url().optional(),
    status: z.string(),
    order: z.number(),
  }),
});

export const collections = { projects };
