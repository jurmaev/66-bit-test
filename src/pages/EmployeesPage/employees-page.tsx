import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Flex,
  Heading,
} from '@chakra-ui/react';
import { ShevronRightIcon } from '../../components/icons';
import { Link, useSearchParams } from 'react-router-dom';
import {
  AppRoutes,
  FilterType,
  genderFilter,
  positionFilter,
  stackFilter,
} from '../../const';
import { MultiCheckbox } from '../../components';
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
      <Container>
        <Breadcrumb
          separator={<ShevronRightIcon />}
          spacing={4}
          py={7}
          mb={4}
          fontSize='18px'
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

        <Flex alignItems='center' justifyContent='space-between' mb={7}>
          <Heading as='h1' fontSize='40px'>
            Список сотрудников
          </Heading>

          <Flex gap={8}>
            <MultiCheckbox {...positionFilter} />
            <MultiCheckbox {...genderFilter} />
            <MultiCheckbox {...stackFilter} />
          </Flex>
        </Flex>
      </Container>

      <Filters />

      <EmployeesTable />
    </>
  );
}
