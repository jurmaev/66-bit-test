import {
  Box,
  Container,
  Flex,
  Link,
  Switch,
  useColorMode,
} from '@chakra-ui/react';
import { LogoIcon } from '../icons';

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box
      as='header'
      py={[4, 5, 6]}
      boxShadow={[
        '0px 4px 4px 0px #0000001A',
        colorMode === 'dark'
          ? '0px 4px 4px 0px #0000001A'
          : '0px 4px 8px 0px #3971A440',
      ]}>
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
          <Switch
            onChange={toggleColorMode}
            isChecked={colorMode === 'dark'}
            ml={{ base: 'auto', md: 12 }}
            sx={{
              '.chakra-switch__track': {
                backgroundColor: 'main.blue',
                boxShadow: '0px 4px 4px 0px #00000040 inset',
                height: 'unset',
                width: '49px',
              },
              '.chakra-switch__thumb': {
                w: 5,
                h: 5,
                p: '3px',
                backgroundImage: 'url(./img/sun-icon.svg)',
                bgSize: '14px 14px',
                bgPosition: 'center',
                bgRepeat: 'no-repeat',
              },
              '.chakra-switch__thumb[data-checked]': {
                backgroundImage: 'url(./img/moon-icon.svg)',
                transform: 'translateX(29px)',
              },
              '@media (max-width: 480px)': {
                '.chakra-switch__track': {
                  width: '41px',
                },
                '.chakra-switch__thumb': { w: '17px', h: '17px' },
                '.chakra-switch__thumb[data-checked]': {
                  transform: 'translateX(23px)',
                },
              },
            }}
          />
        </Flex>
      </Container>
    </Box>
  );
}
