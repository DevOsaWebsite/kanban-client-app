import {Button} from '@/components/button';
import {PlusIcon} from '@/components/icons/plus-icon';

export const AddNewTask = (): React.JSX.Element => {
  return (
    <Button
      className='min-w-0 capitalize space-x-1 px-[18px] sm:px-6 h-8 sm:h-12'
      size={'lg'}
    >
      <span className='block xs:hidden'>
        <PlusIcon />
      </span>
      <span
        className='hidden xs:block tracking-wide text-[15px]/6'
        color='inherit'
      >
        + add new task
      </span>
    </Button>
  );
};
