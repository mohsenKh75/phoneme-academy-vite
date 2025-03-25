import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { Typography } from '@/components/core/Typography';
import { Button } from '@/components/shared/Button';
import { WidgetBox } from '@/components/shared/WidgetBox';
const COURSES_INFO: Array<{ courseId: number; courseName: string; teacherName: string }> = [
  { courseId: 1, courseName: 'فلان', teacherName: 'فلان الله فلانی' },
  { courseId: 2, courseName: 'فلان', teacherName: 'فلان الله فلانی' }
];
export function CoursesInfoSection() {
  return (
    <WidgetBox title='دوره‌های من' className='px-8 flex flex-col justify-between'>
      <Box className='flex flex-col'>
        {COURSES_INFO.map((item, index) => (
          <GridContainer className='py-2'>
            <Typography className='pl-1' variant='text-sub-bold' color='text-primary-base'>
              {index + 1}-
            </Typography>
            <Box>
              <Typography variant='text-sub-bold' color='text-primary-base'>
                {item.courseName}
              </Typography>
              <Typography variant='text-sub-bold' color='text-primary-base'>
                {item.teacherName}
              </Typography>
            </Box>
          </GridContainer>
        ))}
      </Box>
      <Box className='flex items-end pb-4 flex-1'>
        <Button type='filled' backgroundColor='bg-primary-base' textColor='text-white'>
          مشاهده همه
        </Button>
      </Box>
    </WidgetBox>
  );
}
