import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.string(),
    modifiedDate: z.string().optional(),
    author: z.string().default('Zula Studios Team'),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    ogImage: z.string().optional(),
    readingTime: z.number().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
