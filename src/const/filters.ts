export type FilterType = 'Position' | 'Gender' | 'Stack';

type Filter = {
  title: string;
  type: FilterType;
  items: {
    value: string;
    name: string;
  }[];
};

export const positionFilter: Filter = {
  title: 'Должность',
  type: 'Position',
  items: [
    {
      value: 'Frontend',
      name: 'Fronted-разработчик',
    },
    {
      value: 'Backend',
      name: 'Backend-разработчик',
    },
    {
      value: 'Analyst',
      name: 'Аналитик',
    },
    {
      value: 'Manager',
      name: 'Менеджер',
    },
    {
      value: 'Designer',
      name: 'Дизайнер',
    },
  ],
};

export const genderFilter: Filter = {
  title: 'Пол',
  type: 'Gender',
  items: [
    {
      value: 'Male',
      name: 'Мужчина',
    },
    {
      value: 'Female',
      name: 'Женщина',
    },
  ],
};

export const stackFilter: Filter = {
  title: 'Стек технологий',
  type: 'Stack',
  items: [
    {
      value: 'CSharp',
      name: 'C#',
    },
    {
      value: 'React',
      name: 'React',
    },
    {
      value: 'Java',
      name: 'Java',
    },
    {
      value: 'PHP',
      name: 'PHP',
    },
    {
      value: 'Figma',
      name: 'Figma',
    },
    {
      value: 'Word',
      name: 'Word',
    },
  ],
};
