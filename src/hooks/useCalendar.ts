import { normalizeNum } from '@/utils/numHelpers';
import { useState } from 'react';
import DateObject from 'react-date-object';
import shamsi from 'react-date-object/calendars/persian';
import shamsiFa from 'react-date-object/locales/persian_fa';

const MOCK_ACTIVE_CLASSES = {
  russian: ['1404/04/02', '1404/04/09', '1404/04/16', '1404/04/23', '1404/04/30'],
  italian: ['1404/04/04', '1404/04/10', '1404/04/17', '1404/04/24', '1404/04/31'],
  german: ['1404/04/04', '1404/04/10', '1404/04/17', '1404/04/24', '1404/04/31'],
  turkish: ['1404/04/01', '1404/04/08', '1404/04/15', '1404/04/22', '1404/04/29']
};

const realToday = new DateObject({ calendar: shamsi, locale: shamsiFa });
const date = new DateObject({ calendar: shamsi, locale: shamsiFa });

export function useCalendar() {
  function generateCalendarDays(currentDate: DateObject): Array<{
    day: number | null;
    isToday: boolean;
    courseType: Array<string>;
    hasClass: boolean;
  }> {
    const daysInMonth = currentDate.month.length;
    const firstWeekDayInMonthIndex = currentDate.setDay(1).weekDay.index;

    const calendarArray = [];

    for (let i = 0; i < firstWeekDayInMonthIndex + daysInMonth; i++) {
      if (i < firstWeekDayInMonthIndex) {
        calendarArray.push({ day: null, isToday: false, courseType: [], hasClass: false });
      } else {
        const day = i - firstWeekDayInMonthIndex + 1;
        const dateObj = new DateObject({
          year: currentDate.year,
          month: currentDate.month.number,
          day,
          calendar: shamsi,
          locale: shamsiFa
        });

        const formattedDate = normalizeNum(dateObj.format('YYYY/MM/DD'));
        const isToday = formattedDate === normalizeNum(realToday.format('YYYY/MM/DD'));

        const courseType = Object.entries(MOCK_ACTIVE_CLASSES)
          .filter(([_, dates]) => dates.includes(formattedDate))
          .map(([courseName]) => courseName);

        const hasClass = courseType.length > 0;
        calendarArray.push({ day, isToday, courseType: courseType, hasClass });
      }
    }
    return calendarArray;
  }
  const [selectedDate, setSelectedDate] = useState(date);
  const calendarDays = generateCalendarDays(selectedDate);
  function goToPrevMonth() {
    setSelectedDate(new DateObject(selectedDate).subtract(1, 'month'));
  }
  function goToNextMonth() {
    setSelectedDate(new DateObject(selectedDate).add(1, 'month'));
  }

  return { date, calendarDays, goToNextMonth, goToPrevMonth, selectedDate };
}
