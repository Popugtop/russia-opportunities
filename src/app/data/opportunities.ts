import rawData from '@/data/opportunities.json';

export type OpportunityType =
  | 'Гранты'
  | 'Конкурсы'
  | 'Обучение'
  | 'Стажировки'
  | 'Форумы';

export type AudienceType =
  | 'Для школьников'
  | 'Для студентов'
  | 'Для специалистов'
  | 'Для всех';

export type SphereType =
  | 'Наука и IT'
  | 'Волонтёрство'
  | 'Бизнес и управление'
  | 'Творчество';

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  whyImportant: string;
  type: OpportunityType;
  audience: AudienceType;
  sphere: SphereType;
  organizer: string;
  details?: string;
}

// JSON is untyped; cast once here so the rest of the app is fully typed.
export const opportunities: Opportunity[] = rawData as Opportunity[];
