import { create } from 'zustand';
import { State } from './types';

export const useStore = create<State>()((set) => ({
  search: '',
  setSearch(value) {
    set((state) => ({
      ...state,
      search: value,
    }));
  },
  filters: [],
  addFilter(filter) {
    set((state) => {
      if (!state.filters.some((item) => item.value === filter.value)) {
        return {
          ...state,
          filters: [...state.filters, filter],
        };
      }
      return { ...state };
    });
  },
  removeFilter(filter) {
    set((state) => ({
      ...state,
      filters: state.filters.filter((item) => item.value !== filter.value),
    }));
  },
  employees: [],
  appendEmployees(employees) {
    set((state) => ({
      ...state,
      employees: [...state.employees, ...employees],
    }));
  },
  fillEmployees(employees) {
    set((state) => ({
      ...state,
      employees: employees,
    }));
  },
  employee: null,
  setEmployee(employee) {
    set((state) => ({
      ...state,
      employee: employee,
    }));
  },
  page: 1,
  increasePage() {
    set((state) => ({
      page: state.page + 1,
    }));
  },
}));
