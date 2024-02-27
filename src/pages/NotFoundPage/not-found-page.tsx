import { Container, Link as ChakraLink, Text, Box } from '@chakra-ui/react';
import { AppRoutes } from '../../const';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <Container centerContent py={5}>
      <Text>Page not found...</Text>
      <Box>
        Please, return to{' '}
        <ChakraLink as={Link} to={AppRoutes.Employees} color='main.blue'>
          main page
        </ChakraLink>
      </Box>
    </Container>
  );
}
