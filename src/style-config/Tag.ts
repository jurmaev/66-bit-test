import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {
    alignItems: 'center',
    gap: '10px',
    padding: '10px',
    bgColor: 'main.white',
    borderRadius: '5px',
  },
  label: {
    fontSize: '16px',
  },
});

const greyStyle = definePartsStyle({
  container: {
    minWidth: '90px',
    py: '10px',
    bgColor: 'secondary.grey',
    borderRadius: '5px',
    fontSize: '16px',
    justifyContent: 'center',
    alignItems: 'center',
    lineHeight: 1.174,
  },
});

export const Tag = defineMultiStyleConfig({
  baseStyle: baseStyle,
  variants: { grey: greyStyle },
});
