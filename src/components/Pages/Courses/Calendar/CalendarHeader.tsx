import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { ASSETS } from '@/constants/assetsPath';
import { toFarsiNum } from '@/utils/numHelpers';
import DateObject from 'react-date-object';

interface Props {
  goToPrevMonth: () => void;
  goToNextMonth: () => void;
  selectedDate: DateObject;
}
export function CalendarHeader({ goToNextMonth, goToPrevMonth, selectedDate }: Props) {
  return (
    <GridContainer className='px-4' alignItems='items-center' justifyContent='justify-between'>
      <GridContainer>
        <Typography className='pl-1' variant='text-title-large'>
          {toFarsiNum(selectedDate.year)}
        </Typography>
        <Typography variant='text-title-medium'>{selectedDate.month.name}</Typography>
      </GridContainer>
      <GridContainer>
        <Image onClick={goToPrevMonth} src={ASSETS.chevronRight} className='ml-2 w-4 h-4' />
        <Image onClick={goToNextMonth} src={ASSETS.chevronLeft} className='w-4 h-4' />
      </GridContainer>
    </GridContainer>
  );
}
