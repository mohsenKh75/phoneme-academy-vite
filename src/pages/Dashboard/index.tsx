import { Box } from '@/components/core/Box';
import { DashboardWidgetResolver } from '@/components/Pages/DashboardPage';

export default function Dashboard() {
  return (
    <Box className='w-full'>
      <DashboardWidgetResolver />
    </Box>
  );
}
