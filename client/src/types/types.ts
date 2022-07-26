export interface TypeSkill {
  key: number;
  name: string;
  image: string;
  level: number;
}

export interface TypeSkills {
  [key: string]: TypeSkill;
}
