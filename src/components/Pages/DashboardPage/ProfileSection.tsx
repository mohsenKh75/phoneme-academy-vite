import { Box } from '@/components/core/Box';
import { Typography } from '@/components/core/Typography';
import { Button } from '@/components/shared/Button';
import { WidgetBox } from '@/components/shared/WidgetBox';

export function ProfileSection() {
  return (
    <WidgetBox title='اطلاعات شما' className='flex flex-col justify-between px-8'>
      <Box>
        <Typography variant='text-sub-bold'>آدرس ایمیل:</Typography>
        <Typography dir='ltr' variant='text-sub' className='max-w-[180px] truncate'>
          bruce-wayne@gmail.com
        </Typography>
      </Box>
      <Box>
        <Typography variant='text-sub-bold'>شماره همراه:</Typography>
        <Typography variant='text-sub'>09373219722</Typography>
      </Box>
      <Box className='pb-4'>
        <Button type='filled' backgroundColor='bg-primary-base' textColor='text-white'>
          ویرایش
        </Button>
      </Box>
    </WidgetBox>
  );
}
