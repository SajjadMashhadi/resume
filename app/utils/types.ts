export interface image {
  id: number;
  text: string;
  src: string;
  title: string;
  description: string;
  technologies: string[];
}

export interface skill {
  text: string;
  src?: string;
}

export interface skillsData {
  title: string;
  items: skill[];
}
