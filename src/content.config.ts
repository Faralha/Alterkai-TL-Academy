import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        // Emoji shown before the page title.
        icon: z.string().optional(),
        // Header image under public/, shown as a banner in the page head (Starlight already uses `banner`).
        heroImage: z
          .object({ src: z.string(), alt: z.string().default('') })
          .optional(),
        // Role summary shown as a strip under the page title.
        spec: z
          .object({
            difficulty: z.string(),
            time: z.string(),
            format: z.string(),
          })
          .optional(),
      }),
    }),
  }),
};
