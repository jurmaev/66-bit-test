import { defineStyleConfig } from '@chakra-ui/react';

export const Container = defineStyleConfig({
  baseStyle: {
    maxW: '1584px',
  },
  sizes: {
    sm: {
      px: 6,
      paddingX: 6,
    },
    md: {
      px: 3,
      paddingX: 3,
    },
  },
  defaultProps: {
    size: 'md',
  },
});
