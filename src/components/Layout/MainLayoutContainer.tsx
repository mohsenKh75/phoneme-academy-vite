import React from 'react';
import { GridContainer } from '../core/GridContainer';
import { Box } from '../core/Box';
import { Typography } from '../core/Typography';
import { Header } from './Header';
import { Outlet } from 'react-router-dom';

export function MainLayoutContainer({ children }: { children: React.ReactNode }) {
  return (
    <GridContainer direction='flex-col' className='min-h-screen h-full' dir='rtl'>
      <Box tag='header' className='shadow-md p-4'>
        <Header />
      </Box>
      <Box tag='main' className='flex-1 container mx-auto px-4'>
        {children}
      </Box>

      <Box tag='footer' backgroundColor='bg-object-lowkey' className='p-4 text-center'>
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
