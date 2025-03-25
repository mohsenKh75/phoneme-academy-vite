import { GridContainer } from '@/components/core/GridContainer';
import { CoursesSlider } from './CoursesSlider';
import { NotifSection } from './NotifSection';
import { CoursesInfoSection } from './CoursesInfoSection';
import { ProfileSection } from './ProfileSection';

export function DashboardWidgetResolver() {
  return (
    <GridContainer wrap='flex-wrap' className='gap-4'>
      <CoursesSlider />
      <CoursesSlider />
      <NotifSection />
      <GridContainer xSpacing='space-x-4'>
        <CoursesInfoSection />
        <ProfileSection />
      </GridContainer>
    </GridContainer>
  );
}
