import { defineCollection, z } from "astro:content";

const pagesCollection = defineCollection({
	type: "data",
	schema: z.object({
		metatags: z.object({
			title: z.string(),
			description: z.string(),
			keywords: z.string(),
		}),
	}),
});

export default pagesCollection;