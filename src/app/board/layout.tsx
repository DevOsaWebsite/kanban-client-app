import React, {type ReactNode} from 'react';

import {Header} from './_components/header';

interface BoardLayoutProps {
  children: ReactNode;
}

const BoardLayout = (props: BoardLayoutProps): React.JSX.Element => {
  console.log('BoardLayout');

  const {children} = props;

  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};

// eslint-disable-next-line import/no-default-export
export default BoardLayout;
