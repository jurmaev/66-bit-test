import { extendTheme } from '@chakra-ui/react';
import styleConfig from './style-config';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: '"Raleway", sans-serif',
        color: 'main.black',
        lineHeight: '1.174',
      },
    },
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
    },
  },
});
