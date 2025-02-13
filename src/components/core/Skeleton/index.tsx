import { classnames } from '@/utils/classnames';
import { BackgroundColorClassNameType } from 'figma/tailwindTypes';

interface Props {
  className?: string;
  width?: number | string;
  height?: number | string;
  count?: number;
  isCircle?: boolean;
  itemClassName?: string;
  radius?: number;
  backGroundColor?: BackgroundColorClassNameType;
}

export function Skeleton({
  className,
  count = 1,
  height,
  width,
  isCircle,
  itemClassName,
  radius,
  backGroundColor = 'bg-primary-mute'
}: Props) {
  const style = {
    width,
    height,
    borderRadius: isCircle ? '50%' : radius
  };
  const elementClassName = classnames('animate-skeleton', itemClassName, backGroundColor);

  return (
    <div className={className}>
      {Array.from({
        length: count
      }).map((_, index) => (
        <div className={elementClassName} key={`item-${index}`} style={style} />
      ))}
    </div>
  );
}
