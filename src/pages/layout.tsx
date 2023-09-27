import { FC } from 'react';
import { Header } from '../components/header/header';
import { Routing } from '../routes/routing';
import { Portal, SingIn } from '../features';

export const Layout: FC = () => {
  return (
    <>
      <Routing>
        <Header />
        <Portal>
          <SingIn />
        </Portal>
      </Routing>
    </>
  );
};
