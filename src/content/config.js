// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";
import blogSchema from "./_schema";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  type: "blog",
  schema: blogSchema,
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
