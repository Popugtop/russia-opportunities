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

export interface Opportunity {
  id: string;
  title: string;
  description: string;
  whyImportant: string;
  type: OpportunityType;
  audience: AudienceType;
  organizer: string;
  details?: string;
}

export interface Term {
  id: string;
  term: string;
  definition: string;
}

export interface Link {
  id: string;
  title: string;
  url: string;
  description: string;
  category: string;
}
