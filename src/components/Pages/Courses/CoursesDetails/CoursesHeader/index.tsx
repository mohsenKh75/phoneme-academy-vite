import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { Typography } from '@/components/core/Typography';

interface Props {
  onCourseChange: (time: 'curr' | 'prev') => void;
  courseTime: 'curr' | 'prev';
}
export function CoursesHeader({ courseTime, onCourseChange }: Props) {
  return (
    <GridContainer
      xSpacing='space-x-6'
      backgroundColor='bg-card'
      className='h-[48px] px-4 rounded-t-2xl'
      alignItems='items-center'
    >
      <GridContainer direction='flex-col' justifyContent='justify-between' className='cursor-pointer h-full'>
        <Typography
          className='pt-3'
          onClick={() => onCourseChange('curr')}
          variant='text-m3-title-small'
          color={courseTime === 'curr' ? 'text-primary-base' : undefined}
        >
          دوره‌های درجریان
        </Typography>
        {courseTime === 'curr' && <Box className='h-1 w-full rounded-t-md' backgroundColor='bg-primary-base' />}
      </GridContainer>
      <GridContainer direction='flex-col' justifyContent='justify-between' className='cursor-pointer h-full'>
        <Typography
          className='pt-3'
          onClick={() => onCourseChange('prev')}
          variant='text-m3-title-small'
          color={courseTime === 'prev' ? 'text-primary-base' : undefined}
        >
          دوره‌های قبلی
        </Typography>
        {courseTime === 'prev' && <Box className='h-1 w-full rounded-t-md' backgroundColor='bg-primary-base' />}
      </GridContainer>
    </GridContainer>
  );
}
