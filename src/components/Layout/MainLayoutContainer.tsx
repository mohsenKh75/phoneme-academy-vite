import { GridContainer } from '../core/GridContainer';
import { Box } from '../core/Box';
import { Header } from './Header';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { classnames } from '@/utils/classnames';
import { useLayout } from '@/Providers/LayoutContext';
import { Footer } from './Footer';
import { getBackgroundImg, PagesBgTypes } from '@/utils/getBackgroundImg';

export function MainLayoutContainer({ children }: { children: React.ReactNode }) {
  const { isSidebarOpen, setIsSidebarOpen, elementXSpacing, isMobile } = useLayout();
  const { pathname } = useLocation();

  return (
    <GridContainer
      direction='flex-col'
      className={classnames('font-regular mx-auto min-h-screen ', getBackgroundImg(pathname as PagesBgTypes))}
      dir='rtl'
    >
      <Box tag='header' backgroundColor='bg-base-background' className='max-h-[75px] fixed w-full shadow-md px-4 z-50'>
        <Header hamClick={setIsSidebarOpen} isOpen={isSidebarOpen} />
      </Box>
      <GridContainer className='my-[92px]'>
        <Sidebar isExpanded={isSidebarOpen} />
        <Box
          tag='main'
          style={{ marginRight: isMobile ? 'auto' : elementXSpacing }}
          className={classnames('flex-1 container mx-auto px-4 transition-all duration-300')}
        >
          {children}
        </Box>
      </GridContainer>
      <Box tag='footer' backgroundColor='bg-white' className='fixed bottom-0 w-full text-center h-[103px] z-50'>
        <Footer />
      </Box>
    </GridContainer>
  );
}

export function LayoutWrapper() {
  return (
    <MainLayoutContainer>
      <Outlet />
    </MainLayoutContainer>
  );
}
