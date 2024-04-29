import { defineCollection, z } from "astro:content";

const newsArticleCollection = defineCollection({
  schema: z.object({
    title: z.string().max(100),
    date: z.date(),
    tags: z.array(z.string()),
  }),
});

export const collection = {
  newsArticle: newsArticleCollection,
};
