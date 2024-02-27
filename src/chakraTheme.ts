import { StyleFunctionProps, extendTheme } from '@chakra-ui/react';
import styleConfig from './style-config';

export const theme = extendTheme({
  breakpoints: {
    base: '0px',
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1280px',
    '2xl': '1536px',
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: '"Raleway", sans-serif',
        color: props.colorMode === 'dark' ? 'secondary.white' : 'main.black',
        lineHeight: '1.174',
        bgColor: props.colorMode === 'dark' ? 'main.black' : 'main.white',
      },
    }),
  },
  components: { ...styleConfig },
  colors: {
    main: {
      blue: '#155DA4',
      white: '#fff',
      black: '#292929',
      grey: '#B0B0B0',
    },
    secondary: {
      grey: '#F2F2F2',
      white: '#F5F5F5',
    },
  },
  initialColorMode: 'light',
  useSystemColorMode: true,
});
