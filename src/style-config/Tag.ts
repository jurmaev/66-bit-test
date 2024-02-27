import { tagAnatomy } from '@chakra-ui/anatomy';
import {
  StyleFunctionProps,
  createMultiStyleConfigHelpers,
} from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle((props: StyleFunctionProps) => ({
  container: {
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    color: props.colorMode === 'light' ? 'main.black' : 'secondary.white',
    bgColor: props.colorMode === 'light' ? 'main.white' : 'main.black',
    borderRadius: '5px',
  },
}));

const greyStyle = definePartsStyle((props: StyleFunctionProps) => ({
  container: {
    minWidth: '90px',
    py: '10px',
    bgColor: props.colorMode === 'light' ? 'secondary.grey' : '#3E3E3E',
    borderRadius: '5px',
    fontSize: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 1.174,
  },
}));

export const Tag = defineMultiStyleConfig({
  baseStyle: baseStyle,
  variants: { grey: greyStyle },
});
