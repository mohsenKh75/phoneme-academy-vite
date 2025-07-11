import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { Typography } from '@/components/core/Typography';
import { classnames } from '@/utils/classnames';
import { ReactNode, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  src: string;
  title: string;
  showTitle: boolean;
  link?: string;
}
const SidBarWrapper = ({ children, showTitle, link }: { children: ReactNode; showTitle: boolean; link?: string }) => {
  const wrapperClassNames =
    'h-[55px] flex items-center w-full text-nowrap text-ellipsis overflow-hidden cursor-pointer transition-all duration-300 ease-in-out rounded-full';
  return link ? (
    <NavLink
      to={link as string}
      end
      className={({ isActive }) =>
        classnames(wrapperClassNames, {
          'w-[55px]': !showTitle,
          'px-5 gap-4': showTitle,
          'bg-primary-active': isActive,
          'hover:bg-primary-hover': !isActive
        })
      }
    >
      {children}
    </NavLink>
  ) : (
    <GridContainer
      alignItems='items-center'
      xSpacing='space-x-4'
      className={classnames(wrapperClassNames, {
        'w-[55px]': !showTitle,
        'px-5': showTitle
      })}
    >
      {children}
    </GridContainer>
  );
};
export function SidebarItem({ src, title, showTitle, link }: Props) {
  const [hideElement, setHideElement] = useState('');

  useEffect(() => {
    let frameId: number;
    let timeoutId: NodeJS.Timeout;

    if (!showTitle) {
      frameId = requestAnimationFrame(() => {
        timeoutId = setTimeout(() => setHideElement('hidden'), 300);
      });
    } else {
      setHideElement('');
    }

    return () => {
      cancelAnimationFrame(frameId);
      clearTimeout(timeoutId);
    };
  }, [showTitle]);

  return (
    <SidBarWrapper link={link} showTitle={showTitle}>
      <Box
        className={classnames('rounded-circle transition-all duration-300 shrink-0', {
          'translate-x-0': showTitle,
          'translate-x-[-60%]': !showTitle
        })}
      >
        <Image src={src} width={24} height={24} />
      </Box>
      <Typography
        className={classnames(hideElement, 'transition-all overflow-hidden duration-300 ease-in-out transform', {
          'translate-x-[-100%] opacity-0': !showTitle,
          'translate-x-0 opacity-100': showTitle
        })}
        variant='text-inter'
        color='text-text'
      >
        {title}
      </Typography>
    </SidBarWrapper>
  );
}
