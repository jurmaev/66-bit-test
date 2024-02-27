import {
  StyleFunctionProps,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/react';
import { tableAnatomy } from '@chakra-ui/anatomy';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle((props: StyleFunctionProps) => ({
  th: {
    fontWeight: 500,
    fontFamily: '"Raleway", sans-serif',
    textTransform: 'none',
    borderColor: 'secondary.grey',
  },
  tr: {
    _hover: {
      bg: props.colorMode === 'light' ? 'secondary.grey' : '#3E3E3E',
    },
  },
  td: {
    borderColor: 'secondary.grey',
  },
}));

const mdStyle = definePartsStyle({
  th: {
    fontSize: '20px',
    py: 7,
    paddingY: 7,
    px: 3,
    paddingX: 3,
  },
  td: {
    fontSize: '20px',
    px: 3,
    paddingX: 3,
    py: 7,
    paddingY: 7,
  },
});

const smStyle = definePartsStyle({
  th: {
    fontSize: '10px',
    _first: { pl: 6 },
    _last: {
      pr: 6,
    },
  },
  td: {
    fontSize: '12px',
    py: 3,
    _first: {
      pl: 6,
    },
    _last: {
      pr: 6,
    },
  },
});

const sizes = {
  sm: smStyle,
  md: mdStyle,
};

export const Table = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: { variant: 'md' },
});
