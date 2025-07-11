import { GridContainer } from '@/components/core/GridContainer';
import { MainLayout } from '@/components/Layout/MainLayout';
import { Calendar } from '@/components/Pages/Courses/Calendar';
import { CoursesDetails } from '@/components/Pages/Courses/CoursesDetails';

export default function Courses() {
  return (
    <MainLayout>
      <GridContainer direction='flex-col' ySpacing='space-y-5' alignItems='items-center'>
        <Calendar />
        <CoursesDetails />
      </GridContainer>
    </MainLayout>
  );
}
