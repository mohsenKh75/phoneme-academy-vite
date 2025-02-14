// ExpandableComponent.tsx
import React, { ReactNode, useState } from 'react';
import styles from './ExpandableComponent.module.scss';
import { Box } from '@/components/core/Box';
import { GridContainer } from '@/components/core/GridContainer';

interface Props {
  title: ReactNode | string;
  content: ReactNode;
  className: string;
  expandedWidth?: number;
  initWidth?: number;
  onClick?: () => void;
}

export function ExpandableComponent({
  title,
  content,
  className,
  initWidth = 100,
  expandedWidth = 300,
  onClick
}: Props) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
    onClick?.();
  };

  return (
    <GridContainer
      direction='flex-row-reverse'
      alignItems='items-center'
      style={{ width: expanded ? expandedWidth : initWidth }}
      className={`overflow-x-hidden ${styles.expandable} ${expanded ? styles.expanded : styles.shrinking} ${className}`}
      onClick={toggleExpand}
    >
      <Box className='cursor-pointer w-[100px] flex items-center pr-4 shrink-0'>{title}</Box>
      {expanded && <Box className='w-full pr-2 h-full overflow-hidden'>{content}</Box>}
    </GridContainer>
  );
}
