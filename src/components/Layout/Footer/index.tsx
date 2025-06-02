import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { ASSETS } from '@/constants/assetsPath';

export function Footer() {
  return (
    <GridContainer className='border-t border-object-lowkey mx-10 pt-6' justifyContent='justify-between'>
      <GridContainer xSpacing='space-x-1' alignItems='items-center' className='pr-10'>
        <Image src={ASSETS.logo} className='w-[51px] h-[51px]' />
        <Typography variant='text-inter' color='text-text'>
          فونم، آکدمی ای برای تمام فصول
        </Typography>
      </GridContainer>

      <GridContainer xSpacing='space-x-4' alignItems='items-center'>
        <Image src={ASSETS.instagram} className='w-6 h-6 hover:animate-pulse' />
        <Image src={ASSETS.telegram} className='w-6 h-6 hover:animate-pulse' />
        <Image src={ASSETS.whatsapp} className='w-6 h-6 hover:animate-pulse' />
        <Image src={ASSETS.email} className='w-6 h-6 hover:animate-pulse' />
      </GridContainer>
      <GridContainer alignItems='items-center' className='pl-10'>
        <Typography variant='text-inter' color='text-text'>
          متنی جهت خالی نبودن عریضه
        </Typography>
      </GridContainer>
    </GridContainer>
  );
}
