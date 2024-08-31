import React from 'react';

const BoardLayout = (): React.JSX.Element => {
  console.log('BoardLayout');

  return (
    <main className='w-full h-full flex flex-col items-center justify-center gap-4 py-40'>
      <h1>Board Layout</h1>
    </main>
  );
};

// eslint-disable-next-line import/no-default-export
export default BoardLayout;
