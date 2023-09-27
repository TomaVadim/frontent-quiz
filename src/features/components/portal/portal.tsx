import { FC, ReactNode } from 'react';
import { createPortal } from 'react-dom';

type Props = {
  children: ReactNode;
};

export const Portal: FC<Props> = ({ children }) => {
  const portal = document.getElementById('portal') as HTMLDivElement;
  return createPortal(<>{children}</>, portal);
};
