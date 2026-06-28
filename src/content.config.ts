import { defineCollection, z } from "astro:content";

const photos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    series: z.enum(["Urban Structure Study", "Urban Drift"]),
    date: z.string(),
    location: z.string(),
    image: z.string(),
    instagram: z.string().url().optional(),
    featured: z.boolean(),
    order: z.number(),
    zine_candidate: z.boolean().optional()
  })
});

export const collections = { photos };
