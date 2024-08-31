import {Button} from '@/components/button';
import React from 'react';

const HomePage = (): React.JSX.Element => (
  <main className='w-full h-full flex flex-col items-center justify-center gap-4 py-40'>
    <Button size={'lg'}>Button Primary (L)</Button>
    <Button>Button Primary (L)</Button>
    <Button color={'error'}>Button Primary (L)</Button>
    <Button color={'secondary'}>Button Secondary (S)</Button>
  </main>
);

// eslint-disable-next-line import/no-default-export
export default HomePage;
