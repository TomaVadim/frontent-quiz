import { FC } from "react";
import { Outlet } from "react-router-dom";

import { App } from "../../../App";
import { Portal, SingIn } from "../../../features";
import { Header } from "../../../components/header/header";

export const MainLayout: FC = () => {
  return (
    <App>
      <Header />

      <main>
        <Outlet />
      </main>

      <Portal>
        <SingIn />
      </Portal>
    </App>
  );
};
