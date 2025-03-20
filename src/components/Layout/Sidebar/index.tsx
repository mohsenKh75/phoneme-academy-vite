import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { ASSETS } from '@/constants/assetsPath';
import { SidebarItem } from './SidebarItem';
import { classnames } from '@/utils/classnames';
import styles from './Sidebar.module.scss';
import { URLS } from '@/router/urls';

interface Props {
  isExpanded: boolean;
}

export function Sidebar({ isExpanded }: Props) {
  return (
    <GridContainer
      direction='flex-col'
      alignItems='items-center'
      ySpacing='space-y-2'
      className={classnames(
        'fixed no-scrollbar hidden md:flex ease-in-out h-3/4 rounded-2xl mr-8 overflow-x-hidden',
        styles.expandable,
        {
          [`${styles.expanded}`]: isExpanded,
          [`${styles.shrinking}`]: !isExpanded,
          'w-[235px]': isExpanded,
          'w-[85px]': !isExpanded
        }
      )}
      backgroundColor='bg-card'
    >
      <GridContainer direction='flex-col' alignItems='items-center' className='pt-5 h-[148px] mb-4'>
        <Image
          className='transition-all duration-150 ease-in-out'
          src={ASSETS.accountCircle}
          width={isExpanded ? 118 : 80}
          height={isExpanded ? 118 : 80}
        />
        <Typography color='text-text' variant='text-head-line-small'>
          بروس وین
        </Typography>
      </GridContainer>
      <GridContainer direction='flex-col' className='w-full px-4' ySpacing='space-y-2'>
        <SidebarItem link={URLS.DASHBOARD} src={ASSETS.dashboard} showTitle={isExpanded} title='داشبورد' />
        <SidebarItem link={URLS.COURSES} src={ASSETS.school} showTitle={isExpanded} title='دورهای من' />
        <SidebarItem link={URLS.NOTIFICATIONS} src={ASSETS.notification} showTitle={isExpanded} title=' اعلان‌ها' />
        <SidebarItem link={URLS.PAYMENT} src={ASSETS.payment} showTitle={isExpanded} title=' پرداخت‌ها' />
        <SidebarItem link={URLS.PROFILE} src={ASSETS.adminPanel} showTitle={isExpanded} title=' حساب کاربری' />
        <SidebarItem link={URLS.SUPPORT} src={ASSETS.support} showTitle={isExpanded} title=' پشتیبانی‌' />
        <SidebarItem src={ASSETS.exit} showTitle={isExpanded} title=' خروج' />
      </GridContainer>
    </GridContainer>
  );
}
