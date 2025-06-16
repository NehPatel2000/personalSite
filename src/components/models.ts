export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export enum ExperienceType {
  Work = 'Work',
  Education = 'Education',
  Project = 'Project',
}
export interface ExperienceCard {
  id: number;
  title: string;
  description: string;
  duration: string;
  type: ExperienceType;
  place: string;
}
