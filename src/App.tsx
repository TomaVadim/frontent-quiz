import { Provider } from "react-redux";
import { PropsWithChildren } from "react";

import store from "./stores/store";

export const App = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
