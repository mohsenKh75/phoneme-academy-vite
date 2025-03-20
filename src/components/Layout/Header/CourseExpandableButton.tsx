import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { ExpandableComponent } from '@/components/shared/ExpandableComponent';
import { ASSETS } from '@/constants/assetsPath';

const mockCourse = ['انگلیسی', 'ایتالیایی', 'آلمانی', 'ترکی'];
// TODO: fix course itm width issue - discuss with mahbod
export function CourseExpandableButton() {
  return (
    <ExpandableComponent
      title={
        <>
          <Image className='cursor-pointer' src={ASSETS.arrowRight} width={18} height={18} />
          <Typography className='cursor-pointer' variant='text-title-small' color='text-object-black'>
            دوره ها
          </Typography>
        </>
      }
      content={
        <GridContainer
          xSpacing='space-x-2'
          alignItems='items-center'
          justifyContent='justify-between'
          className='h-[24px] cursor-pointer'
        >
          {mockCourse?.map((c) => (
            <Box
              key={c}
              className='transition-colors shrink-0 duration-75 rounded-full flex justify-center hover:bg-primary-hover'
            >
              <Typography variant='text-title-small'>{c}</Typography>
            </Box>
          ))}
        </GridContainer>
      }
      className='h-[30px] border-2 border-object-black rounded-full'
    ></ExpandableComponent>
  );
}
