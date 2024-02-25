import { Box, Container, Flex, Link } from '@chakra-ui/react';
import { LogoIcon } from '../icons';

export function Header() {
  return (
    <Box
      as='header'
      py={[4, 5, 6]}
      boxShadow={['0px 4px 4px 0px #0000001A', '0px 4px 8px 0px #3971A440']}>
      <Container>
        <Flex alignItems={'center'}>
          <LogoIcon
            w={['52px', '72px', '101px']}
            h={['22px', '36px', '41px']}
          />
          <Link
            href='tel:+7(343)290-8476'
            marginLeft='auto'
            fontSize='18px'
            display={['none', 'none', 'initial']}>
            +7 343 290 84 76
          </Link>
          <Link
            href='mailto:info@66bit.ru'
            marginLeft={16}
            fontSize='18px'
            display={['none', 'none', 'initial']}>
            info@66bit.ru
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
