import { ComponentProps, ElementType, MouseEvent, ReactElement } from 'react';
import { ColorType } from '../../../../figma/tailwindTypes';
import { classnames } from '@/utils/classnames';

export type ValidTags = keyof JSX.IntrinsicElements;

export interface BoxProps<T extends ValidTags = 'div'> {
  tag?: T;
  customRef?: ComponentProps<T>['ref'];
  backgroundColor?: `bg-${ColorType}`;
  borderColor?: string;
  boxShadow?: string;
  typeTrackingId?: string;
  ref?: never;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

export function Box<T extends ValidTags = 'div'>({
  backgroundColor,
  borderColor,
  boxShadow,
  className,
  tag,
  typeTrackingId,
  customRef,
  onClick,
  ...props
}: BoxProps<T> & JSX.IntrinsicElements[T]): ReactElement {
  const Tag = tag || ('div' as ElementType);
  return (
    <Tag
      {...props}
      onClick={onClick}
      ref={customRef}
      className={classnames(backgroundColor, borderColor, boxShadow, className)}
      type-tracking-id={typeTrackingId}
    ></Tag>
  );
}
