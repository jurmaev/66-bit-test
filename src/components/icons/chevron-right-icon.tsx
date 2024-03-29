import { Icon, IconProps } from '@chakra-ui/react';

export function ShevronRightIcon(props: IconProps) {
  return (
    <Icon w={[3, 4]} h={[3, 4]} viewBox='0 0 16 17' fill='none' {...props}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M4.6259 2.45964C5.01643 2.06912 5.64959 2.06912 6.04011 2.45964L11.3734 7.79297C11.764 8.1835 11.764 8.81666 11.3734 9.20719L6.04011 14.5405C5.64959 14.931 5.01643 14.931 4.6259 14.5405C4.23538 14.15 4.23538 13.5168 4.6259 13.1263L9.25213 8.50008L4.6259 3.87385C4.23538 3.48333 4.23538 2.85017 4.6259 2.45964Z'
        fill='#B0B0B0'
      />
    </Icon>
  );
}
