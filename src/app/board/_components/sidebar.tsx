import {Button} from '@/components/button';
import {BoardIcon} from '@/components/icons/board-icon';
import {Typography} from '@/components/typography';
import {cn} from '@/utils/classnames';
import React from 'react';

// TODO: Animate sidebar

const boards = [
  {
    id: '1',
    name: 'Board 1',
  },
  {
    id: '2',
    name: 'Board 2',
  },
  {
    id: '3',
    name: 'Board 3',
  },
];

const Item = ({
  name,
  isPrimary,
  isActive,
}: {
  name: string;
  isPrimary?: boolean;
  isActive?: boolean;
}): React.JSX.Element => {
  return (
    <li className='w-full'>
      <button
        className={cn(
          'button justify-start bg-transparent hover:bg-primary text-sm/6 font-bold text-background-on-paper hover:text-primary-on pl-6 py-4 pr-2 rounded-r-full w-full',
          {
            'text-primary': isPrimary,
            'bg-primary text-primary-on': isActive,
          },
        )}
      >
        <span className='inline-flex mr-3'>
          <BoardIcon size={16} />
        </span>
        <Typography variant={'headingMd'} color={'inherit'}>
          {name}
        </Typography>
      </button>
    </li>
  );
};

export const Sidebar = (): React.JSX.Element => {
  console.log('Sidebar');
  const isOpen = true;

  return (
    <aside
      className={cn('bg-background-paper h-full border-r border-outline ', {
        'hidden w-0': !isOpen,
        'block w-sidebar': isOpen,
      })}
    >
      <div className='py-8'>
        <nav>
          <div className='pl-6'>
            <Typography
              component={'h2'}
              color={'paper'}
              variant={'headingSm'}
              className='uppercase'
            >
              all boards (3)
            </Typography>
          </div>
          <ul className='py-5 px-0 w-[240px]'>
            {Array.isArray(boards) &&
              boards.map((board) => {
                const {id, name} = board;
                return <Item key={id} name={name} isActive={id === '1'} />;
              })}
            <Item
              key={'create-new-board'}
              name={'Create new board'}
              isPrimary
            />
          </ul>
        </nav>
      </div>
    </aside>
  );
};
