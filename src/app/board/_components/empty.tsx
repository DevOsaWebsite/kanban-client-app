import {Button} from '@/components/button';
import {Typography} from '@/components/typography';
import React from 'react';

export const EmptyBoard = (): React.JSX.Element => (
  <div className='space-y-6 max-w-[343px] px-2 m-auto text-center'>
    <Typography color={'paper'} component={'h2'} variant={'headingLg'}>
      This board is empty. Create a new column to get started.
    </Typography>
    <Button size={'lg'}>+ Add New Column</Button>
  </div>
);
