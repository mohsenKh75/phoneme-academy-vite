import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { ExpandableComponent } from '@/components/shared/ExpandableComponent';
import { ASSETS } from '@/constants/assetsPath';

const mockCourse = ['انگلیسی', 'ایتالیایی', 'آلمانی', 'ترکی'];

export function CourseExpandableButton() {
  return (
    <ExpandableComponent
      title={
        <>
          <Image src={ASSETS.arrowRight} width={18} height={18} />
          <Typography variant='text-title-small' color='text-object-black'>
            دوره ها
          </Typography>
        </>
      }
      content={
        <GridContainer
          xSpacing='space-x-2'
          alignItems='items-center'
          justifyContent='justify-between'
          className='h-[37px]'
        >
          {mockCourse?.map((c) => (
            <Box
              key={c}
              className='transition-colors duration-75 w-full rounded-full flex justify-center hover:bg-primary-active'
            >
              <Typography variant='text-title-small'>{c}</Typography>
            </Box>
          ))}
        </GridContainer>
      }
      className='h-[43px] border-2 border-object-black rounded-full'
    ></ExpandableComponent>
  );
}
