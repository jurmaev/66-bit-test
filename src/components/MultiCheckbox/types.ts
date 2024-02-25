import { FilterType } from '../../const';

export type MultiCheckboxProps = {
  title: string;
  type: FilterType;
  items: { value: string; name: string }[];
};
