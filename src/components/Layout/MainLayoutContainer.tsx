import React, { useState } from 'react';
import { GridContainer } from '../core/GridContainer';
import { Box } from '../core/Box';
import { Typography } from '../core/Typography';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';

export function MainLayoutContainer({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <GridContainer direction='flex-col' className='mx-auto min-h-screen h-full' dir='rtl'>
      <Box tag='header' backgroundColor='bg-base-background' className='max-h-[75px] fixed w-full shadow-md px-4'>
        <Header hamClick={setIsOpen} isOpen={isOpen} />
      </Box>
      <GridContainer className='my-[92px] h-screen'>
        <Sidebar isExpanded={isOpen} />
        <Box tag='main' className='flex-1 container mx-auto px-4'>
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
