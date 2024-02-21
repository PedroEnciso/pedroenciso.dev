import { z, defineCollection } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    siteLink: z.string().optional(),
    githubLink: z.string().optional(),
    description: z.string(),
    techStack: z.array(z.string()),
    wip: z.boolean(),
  }),
});

export const collections = {
  projects: projectCollection,
};
