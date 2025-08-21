import { Box } from '@/components/core/Box';
import { classnames } from '@/utils/classnames';
import { COURSE_COLORS } from './DayColorTypes';
import { Typography } from '@/components/core/Typography';
import { toFarsiNum } from '@/utils/numHelpers';

interface Props {
  courseType: Array<string>;
  day: number | null;
  hasClass: boolean;
  isToday: boolean;
  onClick?: () => void;
}
export function CalendarDay({ courseType, day, hasClass, isToday, onClick }: Props) {
  return (
    <Box
      onClick={onClick}
      className={classnames('w-8 h-8 mb-1 rounded-full relative flex items-center justify-center text-sub-small', {
        'border border-primary-base': isToday,
        'text-gray-400': !day,
        'cursor-pointer': hasClass
      })}
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
  );
}
