import {Button} from '@/components/button';
import {BoardIcon} from '@/components/icons/board-icon';
import {DarkThemeIcon} from '@/components/icons/dark-theme-icon';
import {LightThemeIcon} from '@/components/icons/light-theme-icon';
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
  const mode: 'dark' | 'light' = 'dark';
  const checked = mode === 'dark';

  return (
    <aside
      className={cn('bg-background-paper h-full border-r border-outline ', {
        'hidden w-0': !isOpen,
        'block w-sidebar': isOpen,
      })}
    >
      <div className='h-full py-8 flex flex-col'>
        <nav className='flex-1'>
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
        <div className='px-3'>
          <div className='rounded-md bg-background w-full h-12'>
            <div className='w-full h-full flex items-center justify-center text-background-on-paper gap-x-6'>
              <span>
                <LightThemeIcon size={20} />
              </span>
              <button
                className={cn(
                  'inline-flex w-10 h-5 bg-primary rounded-full relative',
                )}
              >
                <button
                  className={cn(
                    'inline-flex w-[14px] h-[14px] bg-white rounded-full cursor-pointer absolute top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out',
                    {
                      'left-[3px]': !checked,
                      'right-[3px]': checked,
                    },
                  )}
                />
              </button>
              <span>
                <DarkThemeIcon size={16} />
              </span>
            </div>
          </div>
        </div>
        <div className='py-2 pr-5'>
          <Item name='Hide Sidebar' />
        </div>
      </div>
    </aside>
  );
};
