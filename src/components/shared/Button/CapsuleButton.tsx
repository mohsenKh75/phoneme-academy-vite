import { GridContainer } from '@/components/core/GridContainer';
import { Button } from '@/components/shared/Button';

interface Props {
  iconsSrc: Array<string>;
  buttonsTitle: Array<string>;
  className?: string;
}
export function CapsuleButton({ iconsSrc, buttonsTitle, className }: Props) {
  return (
    <GridContainer className={className}>
      <Button shape='outlined' type='primaryHover' roundedSide='right' className='border-l-0' leftIcon={iconsSrc[0]}>
        {buttonsTitle[0]}
      </Button>
      <Button shape='filled' type='primaryHover' roundedSide='left' leftIcon={iconsSrc[1]}>
        {buttonsTitle[1]}
      </Button>
    </GridContainer>
  );
}
