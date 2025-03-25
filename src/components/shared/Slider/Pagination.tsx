import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { ASSETS } from '@/constants/assetsPath';
import { KeenSliderHooks, KeenSliderInstance } from 'keen-slider';
import { MutableRefObject } from 'react';

interface Props {
  instanceRef: MutableRefObject<KeenSliderInstance<{}, {}, KeenSliderHooks> | null>;
  title: string;
  slides: Array<any>;
}
export function Pagination({ title, instanceRef, slides }: Props) {
  return (
    <GridContainer className='absolute w-full top-0 px-6 pt-4 z-10' justifyContent='justify-between'>
      <Typography variant='text-m3-headline-medium' color='text-object-lowkey'>
        {title}
      </Typography>
      <GridContainer alignItems='items-center'>
        <Image onClick={() => instanceRef.current?.prev()} src={ASSETS.chevronRight} width={21} height={21} />
        <GridContainer className='px-4'>
          {Array.from({ length: slides.length }).map((_, index) => (
            <Box
              onClick={() => instanceRef.current?.moveToIdx(index)}
              className='rounded-full m-1 w-[6px] h-[6px]'
              backgroundColor='bg-primary-base'
            />
          ))}
        </GridContainer>
        <Image onClick={() => instanceRef.current?.next()} src={ASSETS.chevronLeft} width={21} height={21} />
      </GridContainer>
    </GridContainer>
  );
}
