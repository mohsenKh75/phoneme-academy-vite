import { ASSETS } from '@/constants/assetsPath';
import { Box } from '../../core/Box';
import { GridContainer } from '../../core/GridContainer';
import { Image } from '../../core/Image';
import { Typography } from '../../core/Typography';
import { CourseExpandableButton } from './CourseExpandableButton';

export function DesktopHeader() {
  return (
    <GridContainer alignItems='items-center' justifyContent='justify-between'>
      <GridContainer alignItems='items-center' className='flex-1 gap-2'>
        <Image src={ASSETS.phonemeAcademy} width={83} height={83} />
        <Typography className='pl-4 shrink-0'>فونم آکادمی</Typography>
        {
          // TODO: Make an input comp
          <Box className='h-[45px] w-full max-w-[356px] bg-object-fill flex justify-center items-center ml-4 rounded-full'>
            <Typography align='text-center' variant='text-title-small' color='text-object-lowkey'>
              جستجو
            </Typography>
          </Box>
        }
      </GridContainer>
      <GridContainer alignItems='items-center' className='gap-3'>
        <CourseExpandableButton />
        <Image src={ASSETS.helpOutline} width={35} height={35} />
        <Image src={ASSETS.home} width={37} height={37} />
        <Image src={ASSETS.accountCircle} width={60} height={60} />
      </GridContainer>
    </GridContainer>
  );
}
