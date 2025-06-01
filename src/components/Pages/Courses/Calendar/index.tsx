import { Box } from '@/components/core/Box';
import { CalendarHeader } from './CalendarHeader';
import { Typography } from '@/components/core/Typography';
import { toFarsiNum } from '@/utils/numHelpers';
import { classnames } from '@/utils/classnames';
import { useCalendar } from '@/hooks/useCalendar';
import { COURSE_COLORS } from './DayColorTypes';

export function Calendar() {
  const { date, goToNextMonth, goToPrevMonth, selectedDate, calendarDays } = useCalendar();

  return (
    <Box backgroundColor='bg-card' className='max-w-[390px] p-4 rounded-[27px] shadow-md'>
      <CalendarHeader goToNextMonth={goToNextMonth} goToPrevMonth={goToPrevMonth} selectedDate={selectedDate} />
      <Box className='pt-4'>
        <Box className='grid grid-cols-7 text-center justify-items-center'>
          {date.weekDays?.map((day) => (
            <Typography key={day.name} variant='text-sub-small'>
              {day.name}
            </Typography>
          ))}
        </Box>
        <Box className='grid grid-cols-7 pt-5 text-center justify-items-center'>
          {calendarDays.map(({ day, isToday, courseType, hasClass }, idx) => (
            <Box
              key={idx}
              className={classnames(
                'w-8 h-8 mb-1 rounded-full relative flex items-center justify-center text-sub-small',
                {
                  'border border-primary-base': isToday,
                  'text-gray-400': !day,
                  'cursor-pointer': hasClass
                }
              )}
            >
              {courseType.length === 1 && (
                <Box className={classnames('absolute inset-0 rounded-full', COURSE_COLORS[courseType[0]])} />
              )}

              {courseType.length === 2 && (
                <>
                  <Box
                    className={classnames('absolute inset-0 rounded-l-full', COURSE_COLORS[courseType[0]])}
                    style={{ clipPath: 'inset(0 50% 0 0)' }}
                  />
                  <Box
                    className={classnames('absolute inset-0 rounded-r-full', COURSE_COLORS[courseType[1]])}
                    style={{ clipPath: 'inset(0 0 0 50%)' }}
                  />
                </>
              )}

              {day && (
                <Typography className='relative z-10' variant='text-sub-small'>
                  {toFarsiNum(String(day))}
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
