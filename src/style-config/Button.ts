import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  variants: {
    solid: {
      display: 'flex',
      alignItems: 'center',
      background: 'main.blue',
      borderRadius: '8px',
      color: 'main.white',
      py: '12px',
      px: '48px',
      fontWeight: 600,
      _hover: {
        background: 'main.blue',
      },
    },
  },
  defaultProps: {
    variant: 'solid',
  },
});
