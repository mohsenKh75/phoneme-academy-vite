import { Box } from '@/components/core/Box';
import { DashboardWidgetResolver } from '@/components/Pages/DashboardPage';

export default function Dashboard() {
  return (
    <Box className='w-full bg-dashboard-background-img bg-no-repeat bg-fixed bg-left-bottom  min-h-[calc(100dvh-190px)] h-full'>
      <DashboardWidgetResolver />
    </Box>
  );
}
