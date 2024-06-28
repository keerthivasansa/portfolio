import { Project } from "./types";

export const projectData: Project[] = [
    {
        name: "Cohesive",
        skills: ["NextJS", 'APIs', 'Django', 'React', 'Typescript', 'Strapi', 'Git'],
        description: "Generative AI Platform by Unacademy",
        highlights: [
            "Worked directly under CTO of Unacademy",
            "Ranked #2 in ProductHunt during its release week",
            "AI Platform to generate, summarize, generate images, elaborate content in a Word-like Platform",
            "100+ pre-made templates for common use cases like YouTube, Instagram content creation",
            'Uses Strapi CMS, NextJS Incremental Static Generation to build fast, cached web pages'
        ],
        image: "/images/cohesive.png",
        links: [
            {
                name: "Live",
                url: "https://cohesive.so"
            }
        ],
    }
]

export const projectMap: Record<string, { project: Project, index: number }> = {};

projectData.forEach((pr, index) =>  {
    projectMap[pr.name.toLowerCase()] = {
        project: pr,
        index,
    }
})
