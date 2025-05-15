import { Box } from '@/components/core/Box';
import { DesktopHeader } from './DesktopHeader';

interface Props {
  hamClick: (isOpen: boolean) => void;
  isOpen: boolean;
}

export function Header({ hamClick, isOpen }: Props) {
  return (
    <Box>
      <Box className='lg:hidden'>this is Mobile</Box>
      <Box className='hidden lg:block'>
        <DesktopHeader hamClick={hamClick} isOpen={isOpen} />
      </Box>
    </Box>
  );
}
