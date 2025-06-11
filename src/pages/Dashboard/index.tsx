import { MainLayout } from '@/components/Layout/MainLayout';
import { DashboardWidgetResolver } from '@/components/Pages/DashboardPage';

export default function Dashboard() {
  return (
    <MainLayout className='w-full'>
      <DashboardWidgetResolver />
    </MainLayout>
  );
}
