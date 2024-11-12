
export interface Skill {
    color: string;
    dark?: boolean;
    id: string;
}

export const skills: Record<string, Skill> = {
    "APIs": { "color": "#C2ADFF", "dark": false, "id": "APIs" }, "AWS": { "color": "#FFB57F", "dark": false, "id": "AWS" }, "Angular": { "color": "#630000", "dark": true, "id": "Angular" }, "DevOps": { "color": "rgb(106, 26, 146)", "dark": true, "id": "DevOps" }, "Django": { "color": "#A8FF89", "dark": false, "id": "Django" }, "Docker": { "color": "#61C6FF", "dark": false, "id": "Docker" }, "ElectronJS": { "color": "rgb(10, 0, 62)", "dark": true, "id": "ElectronJS" }, "Express": { "color": "#3D3C3F", "dark": true, "id": "Express" }, "Git": { "color": "#FFDEAD", "dark": false, "id": "Git" }, "Golang": { "color": "#006363", "dark": true, "id": "Golang" }, "Java": { "color": "#4E2100", "dark": true, "id": "Java" }, "Javascript": { "color": "#FFE661", "dark": false, "id": "Javascript" }, "Kotlin": { "color": "rgb(42, 20, 90)", "dark": true, "id": "Kotlin" }, "LLM": { "color": "rgb(153, 255, 200)", "dark": false, "id": "LLM" }, "Load Balancing": { "color": "rgb(9, 104, 155)", "dark": true, "id": "Load Balancing" }, "MongoDB": { "color": "rgb(0, 51, 7)", "dark": true, "id": "MongoDB" }, "MySQL": { "color": "#ADEBFF", "dark": false, "id": "MySQL" }, "Networking": { "color": "rgb(255, 162, 162)", "dark": false, "id": "Networking" }, "NextJS": { "color": "black", "dark": true, "id": "NextJS" }, "NodeJS": { "color": "rgb(255, 210, 9)", "dark": false, "id": "NodeJS" }, "Python": { "color": "#00500D", "dark": true, "id": "Python" }, "React": { "color": "#89EAFF", "dark": false, "id": "React" }, "Rust": { "color": "rgb(255, 184, 91)", "dark": false, "id": "Rust" }, "SQL": { "color": "#FF8E09", "dark": false, "id": "SQL" }, "Spring Boot": { "color": "rgb(255, 231, 137)", "dark": false, "id": "Spring Boot" }, "Strapi": { "color": "#4D18BE", "dark": true, "id": "Strapi" }, "Svelte": { "color": "rgb(255, 184, 91)", "dark": false, "id": "Svelte" }, "System Design": { "color": "rgb(19, 67, 37)", "dark": true, "id": "System Design" }, "TailwindCSS": { "color": "rgb(94, 165, 240)", "dark": false, "id": "TailwindCSS" }, "Tensorflow": { "color": "rgb(226, 160, 160)", "dark": false, "id": "Tensorflow" }, "Typescript": { "color": "#10175E", "dark": true, "id": "Typescript" }, "Web Scraping": { "color": "rgb(76, 230, 143)", "dark": false, "id": "Web Scraping" }, "Database": {
        color: "rgb(255, 189, 103)",
        dark: false,
        id: "database"
    }, "Systems Programming": {
        color: 'rgb(119, 179, 253)',
        dark: false,
        id: 'systems'
    }, "OS": {
        color: 'rgb(45, 9, 53)',
        dark: true,
        id: 'os'
    },
    'HTML': {
        color: 'rgb(255, 174, 60)',
        dark: false,
        id: 'html'
    },
    'CSS': {
        color: 'rgb(149, 197, 255)',
        dark: false,
        id: 'css'
    },
    'OOPs': {
        color: 'rgb(51, 247, 129)',
        dark: false,
        id: 'oops'
    }
};

export const allSkills = Object.keys(skills);