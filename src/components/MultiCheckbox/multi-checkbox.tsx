import {
  CheckboxGroup,
  Stack,
  Checkbox,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  Flex,
  useDisclosure,
  useCheckboxGroup,
  useColorMode,
} from '@chakra-ui/react';
import { MultiCheckboxProps } from './types';
import { ChevronBottomIcon } from '..';
import { useStore } from '../../store';

export function MultiCheckbox({ title, items, type }: MultiCheckboxProps) {
  const { colorMode } = useColorMode();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const addFilter = useStore((store) => store.addFilter);
  const removeFilter = useStore((store) => store.removeFilter);
  const { value, setValue } = useCheckboxGroup();

  return (
    <>
      <Popover
        placement='bottom-end'
        gutter={0}
        isOpen={isOpen}
        onClose={onClose}>
        <PopoverTrigger>
          <Button
            background='transparent'
            fontSize={['12px', '16px', '20px']}
            gap={[2, 3]}
            p={[0, 1, 2]}
            _hover={{ background: 'transparent' }}
            color={isOpen ? 'main.blue' : ''}
            onClick={onToggle}
            fontWeight={colorMode === 'light' ? 600 : 400}
            height='initial'>
            {title}
            <ChevronBottomIcon
              transition='transform 0.3s ease-in-out'
              transform={isOpen ? 'rotate(-180deg)' : ''}
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          border='none'
          w='initial'
          p={5}
          bgColor={colorMode === 'light' ? 'main.white' : 'main.black'}
          boxShadow='0px 4px 4px 0px #00000040'
          borderRadius={0}
          borderTop='1px solid #155DA4'>
          <PopoverBody p={0}>
            <CheckboxGroup value={value} onChange={setValue}>
              <Stack direction='column' spacing={[3, 4]}>
                {items.map((item) => (
                  <Flex
                    key={item.value}
                    alignItems='center'
                    justifyContent='space-between'
                    gap='38px'
                    fontSize={['12px', '14px', '16px']}>
                    {item.name}
                    <Checkbox
                      value={item.value}
                      onChange={(evt) => {
                        if (evt.target.checked) {
                          addFilter({ type: type, value: evt.target.value });
                        } else {
                          removeFilter({ type: type, value: evt.target.value });
                        }
                      }}></Checkbox>
                  </Flex>
                ))}
              </Stack>
            </CheckboxGroup>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  );
}
