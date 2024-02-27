import { FilterType } from '../const';

export type Gender = 'Мужчина' | 'Женщина';

export type Position =
  | 'Fronted-разработчик'
  | 'Backend-разработчик'
  | 'Аналитик'
  | 'Менеджер'
  | 'Дизайнер';

export type Stack = 'CSharp' | 'React' | 'Java' | 'PHP' | 'Figma' | 'Word';

export type Filter = {
  type: FilterType;
  value: string;
};

export type Employee = {
  id: number;
  name: string;
  photo: string;
  phone: string;
  gender: Gender;
  position: Position;
  stack: Stack[];
  birthdate: string;
  dateOfEmployment: string;
};

export type State = {
  search: string;
  setSearch: (value: string) => void;
  filters: Filter[];
  addFilter: (filter: Filter) => void;
  removeFilter: (filter: Filter) => void;
  employees: Employee[];
  appendEmployees: (employees: Employee[]) => void;
  fillEmployees: (employees: Employee[]) => void;
  employee: Employee | null;
  setEmployee: (employee: Employee) => void;
  page: number;
  increasePage: () => void;
};
