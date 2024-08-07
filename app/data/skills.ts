
export interface Skill {
    color: string;
    dark?: boolean
}

export const skills: Record<string, Skill> = {
    'React': {
        color: '#89EAFF',
    },
    'Javascript': {
        color: '#FFE661',
    },
    'Angular': {
        color: '#630000',
        dark: true,
    },
    'Golang': {
        color: '#006363',
        dark: true,
    },
    'AWS': {
        color: '#FFB57F',
    },
    'NextJS': {
        color: 'black',
        dark: true,
    },
    'Typescript': {
        color: '#10175E',
        dark: true,
    },
    'Python': {
        color: '#00500D',
        dark: true,
    },
    'Java': {
        color: '#4E2100',
        dark: true
    },
    'Docker': {
        color: '#61C6FF',
    },
    'SQL': {
        color: '#FF8E09',
    },
    'Git': {
        color: '#FFDEAD',
    },
    'Django': {
        color: '#A8FF89',
    },
    'Strapi': {
        color: '#4D18BE',
        dark: true,
    },
    'Express': {
        color: '#3D3C3F',
        dark: true,
    },
    'APIs': {
        color: '#C2ADFF'
    },
    'MySQL': {
        color: '#ADEBFF'
    },
    'Svelte': {
        color: 'rgb(255, 184, 91)'
    },
    'ElectronJS': {
        color: 'rgb(10, 0, 62)',
        dark: true,
    },
    'Web Scraping': {
        color: 'rgb(76, 230, 143)'
    },
    'Load Balancing': {
        color: "rgb(9, 104, 155)",
        dark: true
    },
    "System Design": {
        color: "rgb(19, 67, 37)",
        dark: true,
    },
    "Networking": {
        color: "rgb(255, 162, 162)"
    },
    "TailwindCSS": {
        color: "rgb(94, 165, 240)",
    },
    "Tensorflow": {
        color: "rgb(226, 160, 160)"
    },
    "MongoDB": {
        color: "rgb(0, 51, 7)",
        dark: true
    },
    "Kotlin": {
        color: "rgb(42, 20, 90)",
        dark: true,
    },
    "Spring Boot": {
        color: "rgb(255, 231, 137)",
    },
    "Rust": {
        color: 'rgb(255, 184, 91)'
    },
    'DevOps': {
        color: 'rgb(106, 26, 146)',
        dark: true,
    },
    'LLM': {
        color: 'rgb(153, 255, 200)'
    },
    'NodeJS': {
        color: 'rgb(255, 210, 9)'
    }
}


export const allSkills = Object.keys(skills);