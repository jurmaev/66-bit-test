import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Input,
  Tag,
  TagLabel,
  useColorMode,
} from '@chakra-ui/react';
import { Employee, useStore } from '../../store';
import { CancelIcon, MultiCheckbox } from '..';
import { api } from '../../http';
import { useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { genderFilter, positionFilter, stackFilter } from '../../const';

export function Filters() {
  const { colorMode } = useColorMode();
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
      <Container mb={7} size={{ base: 'sm', lg: 'md' }}>
        <Grid
          alignItems='center'
          gap={[3, 4, 7]}
          gridTemplateAreas={{
            base: `'title'
          'search'
          'filters'`,
            lg: `'title filters'
      'search search'`,
          }}>
          <GridItem area={'title'}>
            <Heading as='h1' fontSize={['20px', '30px', '40px']}>
              Список сотрудников
            </Heading>
          </GridItem>
          <GridItem area={'filters'}>
            <Flex
              gap={[3, 4, 6, 8]}
              justifyContent={{ base: 'flex-start', lg: 'flex-end' }}>
              <MultiCheckbox {...positionFilter} />
              <MultiCheckbox {...genderFilter} />
              <MultiCheckbox {...stackFilter} />
            </Flex>
          </GridItem>
          <GridItem area={'search'}>
            <Input
              placeholder='Поиск'
              ref={inputRef}
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
            />
          </GridItem>
        </Grid>
      </Container>
      <Box bgColor={colorMode === 'light' ? 'secondary.grey' : '#3E3E3E'}>
        <Container
          py={[4, '13px']}
          fontWeight={500}
          fontSize={[14, 16, 20]}
          size={{ base: 'sm', lg: 'md' }}>
          <Flex
            alignItems={{ base: 'flex-start', lg: 'center' }}
            gap={[3, 5, 7, 10]}
            flexDirection={{ base: 'column', lg: 'row' }}>
            Выбранные фильтры:
            <HStack spacing={[4, 5, 6]} mb={{ base: 1, lg: 0 }}>
              {filters.map((filter) => (
                <Tag key={filter.value}>
                  <CancelIcon
                    cursor='pointer'
                    onClick={() => removeFilter(filter)}
                  />
                  <TagLabel fontSize={[12, 14, 16]}>
                    {filter.value.toLowerCase()}
                  </TagLabel>
                </Tag>
              ))}
            </HStack>
            <Button
              ml={{ base: '0', lg: 'auto' }}
              w={{ base: '100%', lg: 'initial' }}
              size={{ base: 'sm', md: 'md', lg: 'lg' }}
              onClick={onSearchClick}>
              Найти
            </Button>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
