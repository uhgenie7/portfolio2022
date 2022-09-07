export interface TypeSkill {
  key: number;
  name: string;
  image: string;
  level: number;
}

export interface TypeSkills {
  [key: string]: TypeSkill;
}

export interface TypeCarrer {
  company: TypeCompany[];
}

export interface TypeCompany {
  id: number;
  title: string;
  date: string;
  icon: string;
  url: string;
  project: TypeProject[];
}

export interface TypeProject {
  id: number;
  title: string;
  date: string;
  description: string;
  detail: TypeProjectDetail[];
  language: string[];
  url: string | null;
}

export interface TypeProjectDetail {
  id: number;
  work: string;
  result?: string[];
  performance?: string[];
}

export interface TypeToyProjects {
  projects: TypeToyProject[];
}

export interface TypeToyProject {
  id: number;
  image: string;
  title: string;
  description: string;
  homepage: string | null;
  github: string;
  language: string[];
}
