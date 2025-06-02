import { ReactNode } from 'react';
import { Box } from '../core/Box';
import { classnames } from '@/utils/classnames';

interface Props {
  children: ReactNode;
  className?: string;
}
export function MainLayout({ children, className }: Props) {
  return <Box className={classnames('min-h-[calc(100dvh-190px)] h-full', className)}>{children}</Box>;
}
