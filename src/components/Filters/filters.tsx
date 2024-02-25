import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Input,
  Tag,
  TagLabel,
} from '@chakra-ui/react';
import { Employee, useStore } from '../../store';
import { CancelIcon } from '..';
import { api } from '../../http';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

export function Filters() {
  const filters = useStore((store) => store.filters);
  const [, setSearchParams] = useSearchParams();
  const removeFilter = useStore((store) => store.removeFilter);
  const fillEmployees = useStore((store) => store.fillEmployees);
  const inputRef = useRef<HTMLInputElement>(null);

  function onSearchClick() {
    const params = new URLSearchParams();

    for (const filter of filters) {
      params.append(filter.type, filter.value);
    }

    if (inputRef.current && inputRef.current.value !== '') {
      params.append('Name', inputRef.current.value);
    }

    setSearchParams(params);

    api
      .get<Employee[]>(`/Employee?${params.toString()}`)
      .then((response) => response.data)
      .then((data) => fillEmployees(data));
  }

  return (
    <>
      <Container mb={7}>
        <Input placeholder='Поиск' ref={inputRef} />
      </Container>
      <Box bgColor='secondary.grey'>
        <Container py='13px' fontWeight={500} fontSize={20}>
          <Flex alignItems='center' gap={10}>
            Выбранные фильтры:
            <HStack spacing={6}>
              {filters.map((filter) => (
                <Tag key={filter.value}>
                  <CancelIcon
                    cursor='pointer'
                    onClick={() => removeFilter(filter)}
                  />
                  <TagLabel>{filter.value.toLowerCase()}</TagLabel>
                </Tag>
              ))}
            </HStack>
            <Button ml='auto' onClick={onSearchClick}>
              Найти
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
