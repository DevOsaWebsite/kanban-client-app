import {cn} from '@/utils/classnames';
import React from 'react';

// TODO: Animate sidebar

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
      aside
    </aside>
  );
};
