import { Skeleton } from '../Skeleton';
import { Box } from '../Box';
import { Fragment } from 'react';

interface Props {
  className?: string;
  lineCount?: number;
  lineWidth?: number;
  lineHeight?: number;
  hasHalfLine?: boolean;
  halfLineIndex?: number;
  halfLineWidth?: number;
}

export default function TypographySkeleton({
  className,
  lineCount = 1,
  lineWidth = 315,
  lineHeight = 13,
  hasHalfLine,
  halfLineIndex = 0,
  halfLineWidth = 187
}: Props) {
  return (
    <Box className={className}>
      {Array.from({ length: lineCount }).map((_, index) => (
        <Fragment key={index}>
          {hasHalfLine && halfLineIndex >= 0 && index === halfLineIndex && (
            <Skeleton radius={4} key={halfLineIndex} width={halfLineWidth} height={lineHeight} className='pb-2' />
          )}
          <Skeleton radius={4} width={lineWidth} height={lineHeight} key={index} className='pb-2' />
          {hasHalfLine && halfLineIndex >= lineCount && index + 1 === halfLineIndex && (
            <Skeleton radius={4} key={halfLineIndex} width={halfLineWidth} height={lineHeight} className='pb-2' />
          )}
        </Fragment>
      ))}
    </Box>
  );
}
