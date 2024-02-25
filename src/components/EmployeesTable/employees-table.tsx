import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { useStore } from '../../store';
import { useNavigate } from 'react-router-dom';
import { formatDate, formatPhone } from '../../utils';

export function EmployeesTable() {
  const employees = useStore((store) => store.employees);
  const navigate = useNavigate();

  if (employees.length === 0) return null;

  return (
    <TableContainer maxWidth='1584px' mx='auto'>
      <Table variant='simple' size={{base: 'sm', lg: 'md'}}>
        <Thead>
          <Tr>
            <Th fontSize={20} lineHeight={1.174} color='main.grey'>
              ФИО
            </Th>
            <Th fontSize={20} lineHeight={1.174} color='main.grey'>
              Должность
            </Th>
            <Th fontSize={20} lineHeight={1.174} color='main.grey'>
              Телефон
            </Th>
            <Th fontSize={20} lineHeight={1.174} color='main.grey'>
              Дата рождения
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {employees.map((employee) => (
            <Tr
              key={employee.id}
              onClick={() => navigate(`/employees/${employee.id}`)}>
              <Td>{employee.name}</Td>
              <Td>{employee.position}</Td>
              <Td>{formatPhone(employee.phone)}</Td>
              <Td>{formatDate(employee.birthdate)}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
