import React, { useEffect, useLayoutEffect, useState } from 'react';
import { GridContainer } from '../core/GridContainer';
import { Box } from '../core/Box';
import { Typography } from '../core/Typography';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import useMedia from 'use-media';
import { classnames } from '@/utils/classnames';

export function MainLayoutContainer({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const isXlScreen = useMedia({ minWidth: '1280px' });

  const [elementXSpacing, setElementXSpacing] = useState('112px');

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (isOpen) {
      setElementXSpacing('267px');
    } else {
      timeoutId = setTimeout(() => setElementXSpacing('112px'), 300);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [isOpen]);
  useLayoutEffect(() => {
    if (isXlScreen) {
      setIsOpen(true);
    }
  }, [isXlScreen]);

  return (
    <GridContainer direction='flex-col' className='mx-auto min-h-screen h-full' dir='rtl'>
      <Box tag='header' backgroundColor='bg-base-background' className='max-h-[75px] fixed w-full shadow-md px-4 z-50'>
        <Header hamClick={setIsOpen} isOpen={isOpen} />
      </Box>
      <GridContainer className='my-[92px]'>
        <Sidebar isExpanded={isOpen} />
        <Box
          tag='main'
          style={{ marginRight: elementXSpacing }}
          className={classnames('flex-1 container mx-auto px-4 transition-all duration-300')}
        >
          {children}
        </Box>
      </GridContainer>
      <Box tag='footer' backgroundColor='bg-object-lowkey' className='fixed bottom-0  w-full p-4 text-center'>
        <Typography>footer</Typography>
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
