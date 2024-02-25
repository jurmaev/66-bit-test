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
  const [searchParams] = useSearchParams();

  useEffect(() => {
    for (const param of searchParams) {
      addFilter({ type: param[0] as FilterType, value: param[1] });
    }
  }, [searchParams, addFilter]);

  useEffect(() => {
    api
      .get<Employee[]>('/Employee')
      .then((response) => response.data)
      .then((data) => fillEmployees(data));
  }, [fillEmployees]);

  return (
    <>
      <Container size={{base: 'sm', lg: 'md'}}>
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
