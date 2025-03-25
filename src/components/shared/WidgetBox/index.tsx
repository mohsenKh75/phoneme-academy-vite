import { Box } from '@/components/core/Box';
import { Typography } from '@/components/core/Typography';
import { classnames } from '@/utils/classnames';
import { LegacyRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  customRef?: LegacyRef<HTMLDivElement>;
  className?: string;
  size?: 'large' | 'small';
  title?: string;
  titleClassName?: string;
}
export function WidgetBox({ children, customRef, className, size = 'large', title, titleClassName }: Props) {
  return (
    <Box
      className={classnames(className, 'h-[306px] shrink-0 rounded-[27px] shadow-md', {
        'max-w-[460px]': size === 'large',
        'max-w-[215px]': size === 'small'
      })}
      customRef={customRef}
      backgroundColor='bg-object-fill'
    >
      {title && (
        <Typography
          className={classnames('py-4', titleClassName)}
          variant='text-m3-headline-medium'
          color='text-object-lowkey'
        >
          {title}
        </Typography>
      )}
      {children}
    </Box>
  );
}
