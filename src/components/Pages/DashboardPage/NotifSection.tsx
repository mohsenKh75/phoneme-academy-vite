import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { Button } from '@/components/shared/Button';
import { WidgetBox } from '@/components/shared/WidgetBox';
import { ASSETS } from '@/constants/assetsPath';

const NOTIFICATIONS: Array<{ text: string; status: 'danger' | 'check' | 'info'; id: number }> = [
  { id: 1, text: 'خبر معمولی دارم میدم. همه چی امن و امانه.', status: 'info' },
  { id: 3, text: 'خلاف‌کارا گاتهام رو در اختیار گرفتن، تاجایی که میشه از خونه بیرون نرید!', status: 'danger' },
  { id: 2, text: 'شوالیه ی سیاه‌پوش برمی‌خیزد!', status: 'check' }
];

function getTextColor(status: 'danger' | 'check' | 'info') {
  switch (status) {
    case 'check':
      return 'text-accent';
    case 'info':
      return 'text-primary-base';
    case 'danger':
      return 'text-attention';
    default:
      return 'text-primary-base';
  }
}

export function NotifSection() {
  return (
    <WidgetBox title='اعلان‌ها' className='px-8'>
      <Box className='pb-5'>
        {NOTIFICATIONS.map((item) => (
          <GridContainer key={item.id} xSpacing='space-x-2' className='py-3' alignItems='items-center'>
            <Image src={ASSETS[item.status]} width={20} height={20} />
            <Typography variant='text-title-medium' color={getTextColor(item.status)}>
              {item.text}
            </Typography>
          </GridContainer>
        ))}
      </Box>
      <Button type='filled' backgroundColor='bg-primary-base' textColor='text-white'>
        مشاهده همه
      </Button>
    </WidgetBox>
  );
}
