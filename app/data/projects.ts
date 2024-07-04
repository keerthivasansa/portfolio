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
    },
    {
        name: "Animos",
        skills: ['Svelte', 'APIs', 'Web Scraping', 'Typescript', 'ElectronJS', 'Git', 'Load Balancing', 'System Design', 'Networking'],
        description: 'on-demand anime streaming application',
        highlights: [
            'Downloaded 10,000+ more times on its release month',
            'Received a 5 star rating for the desktop app from Softepedia.org',
            'Rated 200+ stars on Github',
            'Uses two levels of local and server caching with Redis, SQLite reducing load times from 150ms to sub 3ms',
        ],
        image: "/images/animos.webp",
        links: [
            {
                name: "github",
                url: "https://github.com/keerthivasansa/animos"
            }
        ]
    }
]

export const projectMap: Record<string, { project: Project, index: number }> = {};

export const firstProject = projectData[0];

projectData.forEach((pr, index) => {
    projectMap[pr.name.toLowerCase()] = {
        project: pr,
        index,
    }
})
