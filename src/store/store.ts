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
    set((state) => {
      const existingIds = state.employees.map((employee) => employee.id);
      const newEmployees = employees.filter(
        (employee) => !existingIds.includes(employee.id)
      );
      return {
        ...state,
        employees: [...state.employees, ...newEmployees],
      };
    });
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
