
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
}

export const allSkills = Object.keys(skills);