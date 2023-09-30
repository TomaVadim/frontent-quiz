import { Provider } from "react-redux";
import { PropsWithChildren } from "react";

import { ErrorBoundary } from "react-error-boundary";

import { ErrorFallback } from "@/components/error-fallback/error-fallback";

import store from "@/stores/redux/store";

export const App = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Provider store={store}>{children}</Provider>
    </ErrorBoundary>
  );
};
