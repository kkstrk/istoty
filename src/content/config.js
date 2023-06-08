import { z, defineCollection } from 'astro:content';

const projectCollection = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        homeOrder: z.number(),
        homeImage: z.string(),
        images: z.array(z.string()),
        text: z.array(z.array(z.string())),
        videos: z.array(z.string().url()),
    }),
});

export const collections = {
    'projects': projectCollection,
};