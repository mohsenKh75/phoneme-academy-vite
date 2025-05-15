import { GridContainer } from '@/components/core/GridContainer';
import { CoursesSlider } from './CoursesSlider';
import { NotifSection } from './NotifSection';
import { CoursesInfoSection } from './CoursesInfoSection';
import { ProfileSection } from './ProfileSection';
import { Box } from '@/components/core/Box';
import useMedia from 'use-media';
import { classnames } from '@/utils/classnames';

export function DashboardWidgetResolver() {
  const isVerticalDisplay = useMedia({ maxWidth: '1084px' });

  return (
    <Box
      className={classnames('grid mx-auto justify-items-end gap-4 w-fit', {
        'grid-cols-2': !isVerticalDisplay,
        'grid-cols-1': isVerticalDisplay
      })}
    >
      <CoursesSlider />
      <CoursesSlider />
      <NotifSection />
      <Box
        className={classnames('grid gap-4 justify-self-start', {
          'grid-cols-2 max-w-[460px]': !isVerticalDisplay,
          'grid-cols-1 w-full': isVerticalDisplay
        })}
      >
        <CoursesInfoSection />
        <ProfileSection />
      </Box>
    </Box>
  );
}
