import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { ASSETS } from '@/constants/assetsPath';
import { SidebarItem } from './SidebarItem';

export function Sidebar() {
  return (
    <GridContainer
      direction='flex-col'
      alignItems='items-center'
      ySpacing='space-y-2'
      className='hidden md:flex max-h-[642px] rounded-2xl w-1/4 lg:w-1/5 mr-8'
      backgroundColor='bg-card'
    >
      <GridContainer direction='flex-col' alignItems='items-center' className='pt-5 pb-6'>
        <Image src={ASSETS.accountCircle} width={118} height={118} />
        <Typography color='text-text' variant='text-head-line-small'>
          بروس وین
        </Typography>
      </GridContainer>
      <SidebarItem src={ASSETS.dashboard} title='داشبورد' />
      <SidebarItem src={ASSETS.school} title='دورهای من' />
      <SidebarItem src={ASSETS.notification} title=' اعلان‌ها' />
      <SidebarItem src={ASSETS.payment} title=' پرداخت‌ها' />
      <SidebarItem src={ASSETS.adminPanel} title=' حساب کاربری' />
      <SidebarItem src={ASSETS.support} title=' پشتیبانی‌' />
      <SidebarItem src={ASSETS.exit} title=' خروج' />
    </GridContainer>
  );
}
