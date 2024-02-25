import { createMultiStyleConfigHelpers } from '@chakra-ui/react';
import { tableAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
  th: {
    py: 7,
    paddingY: 7,
    px: 3,
    paddingX: 3,
    fontWeight: 500,
    fontFamily: '"Raleway", sans-serif',
    textTransform: 'none',
  },
  td: {
    fontSize: '20px',
    px: 3,
    paddingX: 3,
    py: 7,
    paddingY: 7,
  },
  tr: {
    _hover: {
      bg: 'secondary.grey',
    },
  },
});

export const Table = defineMultiStyleConfig({
  baseStyle,
});
