

export interface Project {
    name: string;
    description: string;
    image: string;
    highlights: string[];
    skills: string[];
    links: Link[];
}

interface Link {
    name: string;
    url: string;
}

export interface Experience {
    company: string;
    role: string;
    keyPoints: string[];
    skills: string[];
    logo: string;
}