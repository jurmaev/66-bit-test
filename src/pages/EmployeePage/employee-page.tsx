import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ShevronRightIcon } from '../../components';
import { Link, useParams } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { useEffect } from 'react';
import { Employee, useStore } from '../../store';
import { api } from '../../http';

export function EmployeePage() {
  const params = useParams();
  const setEmployee = useStore((store) => store.setEmployee);
  const employee = useStore((store) => store.employee);

  useEffect(() => {
    api
      .get<Employee>(`/Employee/${Number(params.id)}`)
      .then((response) => response.data)
      .then((data) => setEmployee(data));
  }, [setEmployee, params]);

  if (!employee) return null;

  return (
    <Container pb={4}>
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
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} to={AppRoutes.Employees}>
            Список сотрудников
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            as={Link}
            to={`${AppRoutes.Employees}/${employee.id}`}
            isCurrentPage>
            {employee.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      <Flex gap='42px' alignItems='center' mb={10}>
        <Image
          borderRadius='full'
          boxSize='163px'
          src={employee.photo}
          alt={employee.name}
        />
        <Box>
          <Heading as='h1' mb={4} fontSize='40px' fontWeight={700}>
            {employee.name}
          </Heading>
          <Text mb={6} fontSize='24px' fontWeight={500}>
            {employee.position}
          </Text>
          <Flex gap={4}>
            {employee.stack.map((stack) => (
              <Tag key={stack} variant='grey'>
                {stack}
              </Tag>
            ))}
          </Flex>
        </Box>
      </Flex>

      <Divider mb={10} />

      <Heading fontSize='36px' fontWeight={600} mb={8}>
        Основная информация
      </Heading>
      <Flex fontSize='24px' gap='44px'>
        <VStack align='left' fontWeight={500} spacing={6}>
          <Text>Контактный телефон:</Text>
          <Text>Дата рождения:</Text>
          <Text>Дата устройства:</Text>
        </VStack>
        <VStack align='left' spacing={6}>
          <Text>{employee.phone}</Text>
          <Text>{employee.birthdate}</Text>
          <Text>{employee.dateOfEmployment}</Text>
        </VStack>
      </Flex>
    </Container>
  );
}
