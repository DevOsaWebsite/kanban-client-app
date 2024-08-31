import {VerticalEllipsisIcon} from '@/components/icons/vertical-ellipsis-icon';
import {Typography} from '@/components/typography';
import {cn} from '@/utils/classnames';
import Image from 'next/image';
import React from 'react';

import {AddNewTask} from './add-new-task';

export const Header = (): React.JSX.Element => {
  console.log('Header');

  const isSidebarOpen = true;

  return (
    <header className='bg-background-paper flex items-center h-16'>
      <div
        className={cn(
          'inline-flex border-outline px-4 items-center justify-center h-16',
          {
            'border-b box-content': !isSidebarOpen,
            'w-sidebar border-r': isSidebarOpen,
          },
        )}
      >
        <Image src='/logo-dark.svg' alt='Logo' width={153} height={23} />
      </div>
      <nav
        className={cn(
          'flex items-center justify-between gap-4 border-b border-outline px-4 py-5 flex-1',
        )}
      >
        <div className='button group  gap-2'>
          <Typography component={'h1'} variant={'headingLg'}>
            Platform Launch
          </Typography>
          <span className='inline-flex group-hover:rotate-90'>v</span>
        </div>
        <div className='flex items-center justify-center gap-1'>
          <AddNewTask />
          <button className='button p-5 hover:bg-primary-light/10 rounded-full h-8 sx:h-12'>
            <VerticalEllipsisIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};
