import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { ASSETS } from '@/constants/assetsPath';

interface Props {
  src: string;
  title: string;
}
export function SidebarItem({ src, title }: Props) {
  return (
    <GridContainer alignItems='items-center' xSpacing='space-x-4' className='h-[55px] w-2/3 cursor-pointer'>
      <Image src={src} width={24} height={24} />
      <Typography variant='text-inter' color='text-text'>
        {title}
      </Typography>
    </GridContainer>
  );
}
