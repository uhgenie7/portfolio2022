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
  language: string[];
  description: string;
  data: string[];
  url: string | null;
}
