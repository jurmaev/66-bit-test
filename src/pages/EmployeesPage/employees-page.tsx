import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
} from '@chakra-ui/react';
import { ShevronRightIcon } from '../../components/icons';
import { Link, useSearchParams } from 'react-router-dom';
import { AppRoutes, FilterType } from '../../const';
import { Filters } from '../../components/Filters';
import { EmployeesTable } from '../../components/EmployeesTable/employees-table';
import { useEffect } from 'react';
import { api } from '../../http';
import { Employee, useStore } from '../../store';

export function EmployeesPage() {
  const fillEmployees = useStore((store) => store.fillEmployees);
  const addFilter = useStore((store) => store.addFilter);
  const setSearch = useStore((store) => store.setSearch);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    for (const param of searchParams) {
      if (param[0] !== 'Name') {
        addFilter({ type: param[0] as FilterType, value: param[1] });
      } else if (param[0] === 'Name') {
        setSearch(param[1]);
      }
    }
  }, [searchParams, addFilter, setSearch]);

  useEffect(() => {
    api
      .get<Employee[]>(`/Employee?${searchParams.toString()}`)
      .then((response) => response.data)
      .then((data) => fillEmployees(data));
  }, [fillEmployees, searchParams]);

  return (
    <>
      <Container size={{ base: 'sm', lg: 'md' }}>
        <Breadcrumb
          separator={<ShevronRightIcon />}
          spacing={[3, 4]}
          py={['15px', 5, 7]}
          mb={4}
          fontSize={['14px', '16px', '18px']}
          color='main.grey'>
          <BreadcrumbItem>
            <BreadcrumbLink as={Link} to='#'>
              Главная
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink as={Link} to={AppRoutes.Employees}>
              Список сотрудников
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Container>

      <Filters />

      <EmployeesTable />
    </>
  );
}
