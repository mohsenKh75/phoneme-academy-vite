import { Box } from '@/components/core/Box';
import { CalendarHeader } from './CalendarHeader';
import { Typography } from '@/components/core/Typography';
import { toFarsiNum } from '@/utils/numHelpers';
import { classnames } from '@/utils/classnames';
import { useCalendar } from '@/hooks/useCalendar';
import { COURSE_COLORS } from './DayColorTypes';
import { CalendarDay } from './CalendarDay';
import { useEffect, useRef, useState } from 'react';
import { GridContainer } from '@/components/core/GridContainer';
import ToggleSwitch from '@/components/shared/ToggleSwitch';
import { CapsuleButton } from '@/components/shared/Button/CapsuleButton';
import { ASSETS } from '@/constants/assetsPath';
import { useLayout } from '@/Providers/LayoutContext';
import { useBreakpoint } from '@/hooks/useBreakpoints';

export function Calendar() {
  const { date, goToNextMonth, goToPrevMonth, selectedDate, calendarDays } = useCalendar();
  const { isDesktop } = useBreakpoint();
  const [isCalendarSidebarOpen, setIsCalendarSidebarOpen] = useState(false);
  const [canShowDetail, setCanShowDetail] = useState(false);
  const showSidebarDetailRef = useRef<NodeJS.Timeout | null>(null);
  const [calendar, setCalendar] = useState<'شمسی' | 'میلادی'>('شمسی');
  function handleOnDayClick(day: number | null) {
    // NOTE: fetch data and then:
    setIsCalendarSidebarOpen(true);
  }
  useEffect(() => {
    if (isCalendarSidebarOpen) {
      showSidebarDetailRef.current = setTimeout(() => {
        setCanShowDetail(true);
      }, 500);
    }
    return () => {
      if (showSidebarDetailRef.current) {
        clearTimeout(showSidebarDetailRef.current);
      }
    };
  }, [isCalendarSidebarOpen]);

  return (
    <GridContainer
      backgroundColor={isCalendarSidebarOpen ? 'bg-base-background' : undefined}
      direction={isDesktop ? 'flex-row-reverse' : 'flex-col'}
      className={classnames('ease-custom-ease box-border expandable rounded-2xl h-[294px]', {
        'w-[390px] overflow-hidden': !isCalendarSidebarOpen,
        'h-[578px] w-[390px]': isCalendarSidebarOpen && !isDesktop,
        'w-[778px]': isCalendarSidebarOpen && isDesktop
      })}
    >
      <Box backgroundColor='bg-card' className='max-w-[390px] w-full p-4 rounded-2xl shadow-md'>
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
            {calendarDays.map(({ day, isToday, courseType, hasClass }) => (
              <CalendarDay
                courseType={courseType}
                day={day}
                hasClass={hasClass}
                isToday={isToday}
                key={day}
                onClick={hasClass ? () => handleOnDayClick(day) : undefined}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {canShowDetail && (
        <Box className='px-4 py-4 w-full'>
          <GridContainer direction='flex-col'>
            <GridContainer justifyContent='justify-between' alignItems='items-center'>
              <Typography>
                <Typography tag='span' variant='text-title-large'>
                  17
                </Typography>
                خرداد
              </Typography>
              <ToggleSwitch className='h-9' options={['شمسی', 'میلادی']} value={calendar} onChange={setCalendar} />
            </GridContainer>
            <Box className='py-1'>
              <Typography className='pb-1' variant='text-title-small' color='text-primary-base'>
                فلان فلانی
              </Typography>
              <Typography variant='text-title-medium'>ساعت برگزاری: ۱۵ - ۱۶:۳۰</Typography>
            </Box>
            <CapsuleButton
              buttonsTitle={['ویدیو', 'تکالیف']}
              iconsSrc={[ASSETS.homeWorks, ASSETS.video]}
              className='max-h-[31px] max-w-[141px] self-center mr-12'
            />
          </GridContainer>
          <GridContainer direction='flex-col' className='p-4 w-full'>
            <GridContainer justifyContent='justify-between' alignItems='items-center'>
              <Typography>
                <Typography tag='span' variant='text-title-small'>
                  17
                </Typography>
                خرداد
              </Typography>
            </GridContainer>
            <Box className='py-1'>
              <Typography className='pb-1' variant='text-title-small' color='text-primary-base'>
                فلان فلانی
              </Typography>
              <Typography variant='text-title-medium'>ساعت برگزاری: ۱۵ - ۱۶:۳۰</Typography>
            </Box>
            <CapsuleButton
              buttonsTitle={['ویدیو', 'تکالیف']}
              iconsSrc={[ASSETS.homeWorks, ASSETS.video]}
              className='max-h-[31px] max-w-[141px] self-center mr-12'
            />
          </GridContainer>
        </Box>
      )}
    </GridContainer>
  );
}
