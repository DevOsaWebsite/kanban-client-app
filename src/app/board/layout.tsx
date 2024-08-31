import React, {type ReactNode} from 'react';

import {Header} from './_components/header';
import {Sidebar} from './_components/sidebar';

interface BoardLayoutProps {
  children: ReactNode;
}

const BoardLayout = (props: BoardLayoutProps): React.JSX.Element => {
  console.log('BoardLayout');

  const {children} = props;

  return (
    <>
      <Header />
      <div className='flex flex-1'>
        <Sidebar />
        <main className=''>{children}</main>
      </div>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default BoardLayout;
