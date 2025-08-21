import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { classnames } from '@/utils/classnames';
import React from 'react';

interface Props<T extends string> {
  options: [T, T];
  value: T;
  onChange: (val: T) => void;
  className?: string;
}

function ToggleSwitch<T extends string>({ options, value, onChange, className }: Props<T>) {
  const [leftOption, rightOption] = options;

  const isLeft = value === leftOption;

  return (
    <GridContainer
      alignItems='items-center'
      justifyContent='justify-center'
      className={classnames('relative border-2 border-primary-base rounded-full w-40 h-12 overflow-hidden', className)}
    >
      <Box
        className='absolute border-2 border-white left-0 h-full w-1/2 bg-primary-base rounded-full transition-transform duration-300 ease-in-out'
        style={{
          transform: isLeft ? 'translateX(0%)' : 'translateX(100%)'
        }}
      />
      <Box
        tag='button'
        onClick={() => onChange(rightOption)}
        className={`flex-1 h-full z-10 transition-colors duration-300 ${!isLeft ? 'text-white' : 'text-black'}`}
      >
        {rightOption}
      </Box>
      <Box
        tag='button'
        onClick={() => onChange(leftOption)}
        className={`flex-1 h-full z-10 transition-colors duration-300 ${isLeft ? 'text-white' : 'text-black'}`}
      >
        {leftOption}
      </Box>
    </GridContainer>
  );
}

export default ToggleSwitch;
