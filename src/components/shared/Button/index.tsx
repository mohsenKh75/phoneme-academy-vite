import { GridContainer, GridContainerProps } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { classnames } from '@/utils/classnames';
import { BackgroundColorClassNameType, TextColorClassNameType } from 'figma/tailwindTypes';
import { MouseEvent, ReactNode } from 'react';

const BUTTON_TYPES = { outlined: 'outlined', filled: 'filled' };
type ButtonTypes = keyof typeof BUTTON_TYPES;

type Props = {
  isLoading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  backgroundColor?: BackgroundColorClassNameType;
  type?: ButtonTypes;
  roundedSide?: 'left' | 'right' | 'bothSides';
  leftIcon?: string;
  className?: string;
  textColor?: TextColorClassNameType;
} & GridContainerProps<'button'>;
export function Button({
  children,
  isLoading,
  disabled,
  onClick,
  backgroundColor = 'bg-primary-hover',
  roundedSide = 'bothSides',
  leftIcon,
  className,
  type,
  textColor
}: Props) {
  function handleOnClick(e: MouseEvent<HTMLButtonElement>) {
    if (!isLoading && onClick && !disabled) {
      e.preventDefault();
      e.stopPropagation();
      onClick?.(e);
    }
  }
  return (
    <GridContainer
      alignItems='items-center'
      backgroundColor={type === 'filled' ? backgroundColor : undefined}
      tag='button'
      onClick={handleOnClick}
      className={classnames('border border-object-black px-5 py-2', className, textColor, {
        'rounded-full': roundedSide === 'bothSides',
        'rounded-l-full': roundedSide === 'left',
        'rounded-r-full': roundedSide === 'right'
      })}
    >
      {children}
      {leftIcon && <Image className='mr-2' src={leftIcon} width={18} height={18} />}
    </GridContainer>
  );
}
