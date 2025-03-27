import { GridContainer, GridContainerProps } from '@/components/core/GridContainer';
import { Image } from '@/components/core/Image';
import { classnames } from '@/utils/classnames';
import { BackgroundColorClassNameType, BorderColorClassNameType, TextColorClassNameType } from 'figma/tailwindTypes';
import { MouseEvent, ReactNode } from 'react';

const BUTTON_SHAPES = { outlined: 'outlined', filled: 'filled' } as const;
const BUTTON_TYPES = { primary: 'primary', primaryHover: 'primaryHover' } as const;

type ButtonTypes = keyof typeof BUTTON_TYPES;
type ButtonShapes = keyof typeof BUTTON_SHAPES;

function getButtonType(
  shape: ButtonShapes,
  type: ButtonTypes
): {
  textColor?: TextColorClassNameType;
  bgColor?: BackgroundColorClassNameType;
  borderColor?: BorderColorClassNameType;
} {
  switch (type) {
    case 'primary':
      if (shape === BUTTON_SHAPES.filled) {
        return { textColor: 'text-white', bgColor: 'bg-primary-base' };
      }
      return { textColor: 'text-primary-base', borderColor: 'border-primary-base' };
    case 'primaryHover':
      if (shape === BUTTON_SHAPES.filled) {
        return { textColor: 'text-object-black', bgColor: 'bg-primary-hover', borderColor: 'border-object-black' };
      }
      return { textColor: 'text-object-black', borderColor: 'border-object-black' };
    default:
      return { textColor: 'text-white', bgColor: 'bg-primary-base' };
      break;
  }
}

type Props = {
  isLoading?: boolean;
  disabled?: boolean;
  children: ReactNode;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  backgroundColor?: BackgroundColorClassNameType;
  shape?: ButtonShapes;
  roundedSide?: 'left' | 'right' | 'bothSides';
  leftIcon?: string;
  className?: string;
  type?: keyof typeof BUTTON_TYPES;
} & GridContainerProps<'button'>;
export function Button({
  children,
  isLoading,
  disabled,
  onClick,
  roundedSide = 'bothSides',
  leftIcon,
  className,
  shape = BUTTON_SHAPES.filled,
  type = BUTTON_TYPES.primary
}: Props) {
  function handleOnClick(e: MouseEvent<HTMLButtonElement>) {
    if (!isLoading && onClick && !disabled) {
      e.preventDefault();
      e.stopPropagation();
      onClick?.(e);
    }
  }
  const { bgColor, borderColor, textColor } = getButtonType(shape, type);

  return (
    <GridContainer
      alignItems='items-center'
      backgroundColor={bgColor}
      tag='button'
      onClick={handleOnClick}
      className={classnames('border border-object-black px-5 py-2 shrink-0', className, textColor, borderColor, {
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
