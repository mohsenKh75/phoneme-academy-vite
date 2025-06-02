import { Box } from '@/components/core/Box';
import { Calendar } from '@/components/Pages/Courses/Calendar';

export default function Courses() {
  return (
    // TODO: create separate layout for the pages and use these classnames to handle height.
    <Box className='bg-courses-background-img bg-no-repeat bg-fixed bg-left-bottom  min-h-[calc(100dvh-190px)] h-full'>
      <Calendar />
    </Box>
  );
}
