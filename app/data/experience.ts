import { Experience } from "./types";


export const experiences: Experience[] = [
    {
        company: "MableAI",
        role: "Software Engineer Intern",
        keyPoints: [
            "Developed scalable microservices in Typescript, Golang and Python",
            "Collaborated with Meta (Facebook) on a comprehensive study on using our pipeline for ads",
            "Reduced Ad Spending and increased Customer spending by 70%",
            "Developed a proprietory deduplication service with Redis & Golang reducing memory usage by almost 90% to ~4kb per event"
        ],
        logo: "/images/logo/mable.jpeg",
        skills: [
            'Golang', 'Python', 'Typescript', 'AWS', 'System Design', 'Docker', 'DevOps'
        ],
        duration: 'Aug - Oct, 2023'
    }, {
        company: "Unacademy",
        role: "FullStack Developer Intern",
        keyPoints: [
            "Directly worked under CTO of Unacademy",
            "Developed Cohesive, an AI platform that was ranked #2 in ProductHunt for its entire release week",
            "Developed EmailGenie, a cold-email generating tool that personalizes content with AI and LinkedIn profile of the recipient, converting 200+ customers on its release",
            "Selected as one of 7 / 5000+ applicants, and recognized as one of the best interns that were put to work on flagship product under the CTO"
        ],
        logo: "/images/logo/unacademy.jpeg",
        skills: [
            "NextJS", "React", "Strapi", "Django", "Python", "LLM"
        ],
        duration: 'Feb - Apr, 2023'
    }, 
    {
        company: "Chance Trades",
        role: "FullStack Freelancer",
        keyPoints: [
            "Negotiated the contract worth $2500 with the company in 10th grade",
            "Migrated the HTML/CSS website being deployed to Heroku, to fully dynamic React deployed to dedicated Cloud server",
            "Scaled the server to handle load of hundreds of thousands of requests / second",
            "Reduced the loading times of options data from almost 15 seconds to under 3 seconds with SQL optimisations and lazy loading"
        ],
        logo: "/images/logo/ct.png",
        skills: [
            "Javascript", "Express", "NodeJS", "Networking", 'React'
        ],
        duration: 'Sep - Jan, 2021'
    }
]