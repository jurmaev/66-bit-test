import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
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
import { formatDate, formatPhone } from '../../utils';

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
    <Container pb={4} size={{ base: 'sm', lg: 'md' }}>
      <Breadcrumb
        separator={<ShevronRightIcon />}
        spacing={4}
        overflow='hidden'
        whiteSpace='nowrap'
        textOverflow='ellipsis'
        py={['15px', 5, 7]}
        mb={[2, 3, 4]}
        fontSize={['14px', '16px', '18px']}
        color='main.grey'>
        <BreadcrumbItem display={{ base: 'none', lg: 'initial' }}>
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

      <Grid
        mb={[5, 8, 10]}
        gap={{ base: '12px 16px', md: '32px', lg: '24px 42px' }}
        alignItems={{ base: 'start', lg: 'center' }}
        gridTemplateAreas={{
          base: `'image info'
        'stack stack'`,
          lg: `'image info'
        'image stack'`,
        }}
        gridTemplateColumns={{
          base: '100px 1fr',
          md: '130px 1fr',
          lg: '163px 1fr',
        }}>
        <GridItem gridArea={'image'}>
          <Image borderRadius='full' src={employee.photo} alt={employee.name} />
        </GridItem>
        <GridItem gridArea={'info'}>
          <Heading
            as='h1'
            mb={[2, 3, 4]}
            fontSize={{ base: '20px', md: '30px', lg: '40px' }}
            fontWeight={700}>
            {employee.name}
          </Heading>
          <Text
            fontSize={{ base: '14px', md: '19px', lg: '24px' }}
            fontWeight={500}>
            {employee.position}
          </Text>
        </GridItem>
        <GridItem gridArea={'stack'}>
          <Flex gap={[2, 3, 4]} flexWrap={'wrap'}>
            {employee.stack.map((stack) => (
              <Tag
                key={stack}
                variant='grey'
                fontSize={{ base: '12px', md: '14px', lg: '16px' }}>
                {stack}
              </Tag>
            ))}
          </Flex>
        </GridItem>
      </Grid>

      <Divider mb={[5, 8, 10]} />

      <Heading
        fontSize={{ base: '24px', md: '30px', lg: '36px' }}
        fontWeight={600}
        mb={[4, 6, 8]}>
        Основная информация
      </Heading>
      <Flex
        fontSize={['14px', '19px', '24px']}
        gap={['18px', '24px', '36px', '44px']}>
        <VStack align='left' fontWeight={500} spacing={6}>
          <Text>Контактный телефон:</Text>
          <Text>Дата рождения:</Text>
          <Text>Дата устройства:</Text>
        </VStack>
        <VStack align='left' spacing={6}>
          <Text>{formatPhone(employee.phone)}</Text>
          <Text>{formatDate(employee.birthdate)}</Text>
          <Text>{formatDate(employee.dateOfEmployment)}</Text>
        </VStack>
      </Flex>
    </Container>
  );
}
