

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