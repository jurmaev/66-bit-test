import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorMode,
} from '@chakra-ui/react';
import { Employee, useStore } from '../../store';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { formatDate, formatPhone } from '../../utils';
import { useEffect, useRef } from 'react';
import { api } from '../../http';

export function EmployeesTable() {
  const employees = useStore((store) => store.employees);
  const navigate = useNavigate();
  const page = useStore((store) => store.page);
  const increasePage = useStore((store) => store.increasePage);
  const targetRef = useRef<HTMLTableRowElement>(null);
  const appendEmployees = useStore((store) => store.appendEmployees);
  const [searchParams] = useSearchParams();
  const { colorMode } = useColorMode();

  console.log(page);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        searchParams.set('page', String(page));
        api
          .get<Employee[]>(`/Employee?${searchParams.toString()}`)
          .then((response) => response.data)
          .then((data) => {
            if (data.length !== 0) {
              increasePage();
              appendEmployees(data);
            }
          });
      }
    });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef.current, searchParams, page, increasePage, appendEmployees]);

  if (employees.length === 0) return null;

  return (
    <TableContainer maxWidth='1584px' mx='auto'>
      <Table
        variant='simple'
        size={{ base: 'sm', lg: 'md' }}
        >
        <Thead>
          <Tr>
            <Th w='40%' fontSize={20} lineHeight={1.174} color='main.grey'>
              ФИО
            </Th>
            <Th w='25%' fontSize={20} lineHeight={1.174} color='main.grey'>
              Должность
            </Th>
            <Th w='15%' fontSize={20} lineHeight={1.174} color='main.grey'>
              Телефон
            </Th>
            <Th w='10%' fontSize={20} lineHeight={1.174} color='main.grey'>
              Дата рождения
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee, index) => (
            <Tr
              key={employee.id}
              onClick={() => navigate(`/employees/${employee.id}`)}
              ref={employees.length - 1 === index ? targetRef : undefined}>
              <Td w='40%'>{employee.name}</Td>
              <Td w='25%'>{employee.position}</Td>
              <Td w='15%'>{formatPhone(employee.phone)}</Td>
              <Td w='10%'>{formatDate(employee.birthdate)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
