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
  },
  tr: {
    _hover: {
      bg: props.colorMode === 'light' ? 'secondary.grey' : '#3E3E3E',
    },
  },
}));

const mdStyle = definePartsStyle({
  th: {
    lineHeight: 1.174,
    fontSize: '20px',
    py: 7,
    paddingY: 7,
    px: 3,
    paddingX: 3,
  },
  td: {
    lineHeight: 1.174,
    fontSize: '20px',
    px: 3,
    paddingX: 3,
    py: 7,
    paddingY: 7,
  },
});

const smStyle = definePartsStyle({
  th: {
    lineHeight: 1.174,
    fontSize: '10px',
    _first: { pl: 6 },
    _last: {
      pr: 6,
    },
  },
  td: {
    lineHeight: 1.174,
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

const simpleVariant = definePartsStyle({
  th: {
    borderColor: 'secondary.grey',
  },
  td: {
    borderColor: 'secondary.grey',
  },
});

const variants = {
  simple: simpleVariant,
};

export const Table = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: { variant: 'simple' },
});
