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
        name: "Bring To Life",
        skills: ['HTML', 'APIs', 'CSS', 'Typescript', 'Git', 'Networking'],
        description: 'bring characters to life with multi-modal AI',
        highlights: [
            "Capture any live photo and turn it into live characters with a story!",
            "Developed as part of the Cloudflare AI Challenge",
            "Uses 5 models in total to create the entire pipeline",
            "Performs object detection, image description, text generation, summarization and image generation.",
        ],
        image: "/images/bring_to_life.png",
        links: [
            {
                name: "github",
                url: "https://github.com/keerthivasansa/bring-to-life"
            }
        ]
    },
    {
        name: 'SavanahDB',
        description: 'Javascript native NoSQL database',
        skills: ['Database', 'Systems Programming', 'OS', 'Javascript'],
        image: '/images/savanah.png',
        links: [
            {
                name: 'github',
                url: 'https://github.com/keerthivasansa/savanah'
            },
            {
                name: 'npm',
                url: 'https://www.npmjs.com/package/savanahdb'
            }
        ],
        highlights: [
            'Fully written in Javascript leverages async I/O',
            'realSync - have updates reflect in subsequent queries with 0ms delay',
            '55x faster batch inserts for moderate size payloads against SQLite WAL mode',
        ]
    },
    {
        name: 'CForces',
        description: 'Codeforces analysis bot for discord',
        image: "/images/image.png",
        links: [
            {
                name: "github",
                url: "https://github.com/keerthivasansa/cf-bot"
            }
        ],
        skills: ['Typescript', 'APIs', 'OOPs'],
        highlights: [
            "Led a team of 10 inter college coding club programmers to build the bot.",
            'Serves around 2,000+ users across college coding clubs',
            'Suggests problems to practice and improve based on user\'s weakness',
            'Predict rating of new problems before codeforces\' official rating comes out',
        ],
    },
]

export const projectMap: Record<string, { project: Project, index: number }> = {};

export const firstProject = projectData[0];

export const encodeName = (name: string) => name.replaceAll(' ', '_').toLowerCase()

projectData.forEach((pr, index) => {
    const nameEncoding = encodeName(pr.name);
    projectMap[nameEncoding] = {
        project: pr,
        index,
    }
})
