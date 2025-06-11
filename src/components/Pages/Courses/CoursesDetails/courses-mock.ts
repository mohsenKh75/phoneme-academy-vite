export type CourseDetails = { courseName: string; teacherName: string; courseId: number };
export interface CoursesDetailsType {
  currentCourses: Array<CourseDetails>;
  previousCourses: Array<CourseDetails>;
}

export const MOCK_COURSES_DETAILS: CoursesDetailsType = {
  currentCourses: [
    { courseName: 'معجون‌سازی', teacherName: 'پروفسور اسنیپ', courseId: 1 },
    { courseName: 'جادوی سیاه', teacherName: 'تام مارولو ریدل', courseId: 2 },
    { courseName: 'تاریخ سرزمین میانه', teacherName: 'گاندولف سفید', courseId: 3 }
  ],
  previousCourses: [
    { courseName: 'آشپزی', teacherName: 'دکتر هانیبال', courseId: 1 },
    { courseName: 'منطق', teacherName: 'شرلوک‌ هلمز', courseId: 2 },
    { courseName: 'روابط عمومی', teacherName: 'تراویس بیکل', courseId: 3 }
  ]
} as const;
