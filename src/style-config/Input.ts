import { defineStyleConfig } from '@chakra-ui/react';

export const Input = defineStyleConfig({
  variants: {
    solid: {
      field: {
        bgColor: 'transparent',
        color: '#818181',
        p: '10px',
        borderRadius: '5px',
        border: '0.5px solid #B0B0B0',
        _placeholder: {
          color: 'main.grey',
        },
        _focusVisible: {
          borderColor: 'main.blue',
          _placeholder: {
            color: '#818181',
          },
        },
      },
    },
  },
  sizes: {
    sm: {
      fontSize: '12px',
    },
    md: {
      fontSize: '16px',
    },
    lg: {
      fontsize: '20px',
    },
  },
  defaultProps: {
    variant: 'solid',
    size: 'sm',
  },
});
