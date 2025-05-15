import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { Box } from '@/components/core/Box';
import { Typography } from '@/components/core/Typography';
import { GridContainer } from '@/components/core/GridContainer';
import { Button } from '@/components/shared/Button';
import { ASSETS } from '@/constants/assetsPath';
import { Image } from '@/components/core/Image';
import { Pagination } from '@/components/shared/Slider/Pagination';
import { WidgetBox } from '@/components/shared/WidgetBox';
import { useEffect } from 'react';
import { useBreakpoint } from '@/hooks/useBreakpoints';

interface Slide {
  id: number;
  title: string;
  className: string;
  teacher: string;
  sessionInfo: { time: string; remaining: string };
}

const slides: Slide[] = [
  {
    id: 1,
    title: 'جلسه‌ی قبل',
    className: 'نام کلاس',
    teacher: 'با نام مدرس',
    sessionInfo: { time: 'yyyy/mm/dd - hh:mm', remaining: 'جلسه‌ی 2 از 25 جلسه' }
  },
  {
    id: 2,
    title: 'جلسه‌ی بعد',
    className: 'کلاس ریاضی',
    teacher: 'با استاد احمدی',
    sessionInfo: { time: 'yyyy/mm/dd - hh:mm', remaining: 'جلسه‌ی 2 از 25 جلسه' }
  }
];

export function CoursesSlider() {
  const [sliderRef, instanceRef] = useKeenSlider({
    slides: { perView: 1, spacing: 0 }
  });
  useEffect(() => {
    const timeout = setTimeout(() => {
      instanceRef.current?.update();
    }, 0);

    return () => clearTimeout(timeout);
  }, [instanceRef]);

  return (
    <WidgetBox className='relative pt-10 keen-slider' customRef={sliderRef}>
      <Pagination instanceRef={instanceRef} slides={slides} title='جلسه بعد' />
      {slides.map((slide) => (
        <Box key={slide.id} className='keen-slider__slide flex flex-col py-4 px-8'>
          <Box className='pt-6'>
            <Typography className='pb-3' color='text-primary-base'>
              نام کلاس
            </Typography>
            <Typography color='text-primary-base'>نام مدرس</Typography>
          </Box>
          <Box className='py-6'>
            <GridContainer>
              <Typography className='pb-3 pl-2'>زمان برگزاری:</Typography>
              <Typography className='pb-3'>{slide.sessionInfo.time}</Typography>
            </GridContainer>
            <Typography className='pb-3'>{slide.sessionInfo.remaining}</Typography>
          </Box>
          <GridContainer>
            <Button
              shape='outlined'
              type='primaryHover'
              roundedSide='right'
              className='border-l-0'
              leftIcon={ASSETS.homeWorks}
            >
              ویدیو
            </Button>
            <Button shape='filled' type='primaryHover' roundedSide='left' leftIcon={ASSETS.video}>
              تکالیف
            </Button>
          </GridContainer>
        </Box>
      ))}
    </WidgetBox>
  );
}
