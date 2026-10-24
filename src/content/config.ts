import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional().default([]),
    toc: z.boolean().optional().default(false),
    draft: z.boolean().optional().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string().optional().default('General'),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    github: z.string().optional(),
    demo: z.string().optional(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { posts, projects };
