import { Provider } from "react-redux";
import { PropsWithChildren } from "react";

import { ErrorBoundary } from "react-error-boundary";

import { Fallback } from "./features/components/fallback/fallback";

import store from "@/stores/redux/store";

export const App = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={Fallback}>
      <Provider store={store}>{children}</Provider>
    </ErrorBoundary>
  );
};
