// 1. Import utilities from `astro:content`
import { z } from "astro:content";

// 2. Define a `type` and `schema` for each collection
const blogSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()),
  image: z.string().optional(),
  featured: z.string().optional(),
});

export default blogSchema;
