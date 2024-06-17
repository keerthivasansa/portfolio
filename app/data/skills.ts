
export interface Skill {
    color: string;
    font ?: string;
    border ?: string;
}

export const skills: Record<string, Skill> = {
    'React': {
        color: '#61C6FF',
        font: 'black',
        border: 'black'
    },
    'Javascript': {
        color: '#FFE661',
        font: 'black',
        border: 'black'
    },
    'Angular': {
        color: '#630000'
    },
    'Golang': {
        color: '#006363'
    },
    'AWS': {
        color: '#FFB57F'
    },
    'NextJS': {
        color: 'black',
        border: 'black'
    },
    'Typescript': {
        color: '#10175E',
    },
    'Python': {
        color: '#00500D',
    },
    'Java': {
        color: '#4E2100',
    },
    'Docker': {
        color: '#61C6FF',
        font: 'black',
        border: 'black'
    },
    'SQL': {
        color: '#FF8E09',
        font: 'black',
        border: 'black'
    },
    'Git': {
        color: '#10175E',
    }
}

export const allSkills = Object.keys(skills);