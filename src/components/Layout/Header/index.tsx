import { Box } from '@/components/core/Box';
import { DesktopHeader } from './DesktopHeader';

export function Header() {
  return (
    <Box>
      <Box className='md:hidden'>this is Mobile</Box>
      <Box className='hidden md:block'>
        <DesktopHeader />
      </Box>
    </Box>
  );
}
