import { Box } from '@/components/core/Box';
import { CourseDetails, MOCK_COURSES_DETAILS } from './courses-mock';
import { GridContainer } from '@/components/core/GridContainer';
import { Typography } from '@/components/core/Typography';
import { useState } from 'react';
import { classnames } from '@/utils/classnames';
import { CoursesHeader } from './CoursesHeader';
import { Image } from '@/components/core/Image';
import { ASSETS } from '@/constants/assetsPath';
type x = 'currentCourses' | 'previousCourses';
export function CoursesDetails() {
  const currCourses = MOCK_COURSES_DETAILS['currentCourses'];
  const prevCourses = MOCK_COURSES_DETAILS['previousCourses'];
  const [courses, setCourses] = useState<Array<CourseDetails>>(currCourses);
  const [courseTime, setCourseTime] = useState<'curr' | 'prev'>('curr');

  function changeCourseTime(time: 'curr' | 'prev') {
    setCourses(time === 'curr' ? prevCourses : currCourses);
    setCourseTime(time);
  }
  return (
    <GridContainer direction='flex-col' ySpacing='space-y-1' className='max-w-[692px] w-full'>
      <CoursesHeader courseTime={courseTime} onCourseChange={changeCourseTime} />
      {courses?.map((course, idx) => (
        <GridContainer
          key={course.courseId}
          backgroundColor='bg-card'
          className={classnames('h-[48px] px-4', { 'rounded-b-2xl': idx === courses.length - 1 })}
          alignItems='items-center'
          justifyContent='justify-between'
        >
          <Typography variant='text-m3-title-small'>
            دوره {course.courseName} با {course.teacherName}
          </Typography>
          <Image src={ASSETS.arrowRight} className='w-6 h-6' />
        </GridContainer>
      ))}
    </GridContainer>
  );
}
