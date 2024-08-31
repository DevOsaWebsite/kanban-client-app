import {Typography} from '@/components/typography';
import React from 'react';

export const Header = (): React.JSX.Element => {
  console.log('Header');

  return (
    <header className='bg-background-paper border-b border-outline'>
      <div className='h-16 flex items-center justify-between px-4 py-5 gap-4'>
        <div>Logo</div>
        <div className='button group mr-auto gap-2'>
          <Typography component={'h1'} variant={'headingLg'}>
            Platform Launch
          </Typography>
          <span className='inline-flex group-hover:rotate-90'>v</span>
        </div>
        <div>
          <button>+</button>
          <button>...</button>
        </div>
      </div>
    </header>
  );
};
