import { Box, Container, Flex, Link } from '@chakra-ui/react';
import { LogoIcon } from '../icons';

export function Header() {
  return (
    <Box
      as='header'
      py={6}
      boxShadow='0px 4px 8px 0px #3971A440;
    '>
      <Container>
        <Flex alignItems={'center'}>
          <LogoIcon />
          <Link href='tel:+7(343)290-8476' marginLeft='auto' fontSize='18px'>
            +7 343 290 84 76
          </Link>
          <Link href='mailto:info@66bit.ru' marginLeft={16} fontSize='18px'>
            info@66bit.ru
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
