import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";

import store from "@/stores/redux/store";
import { errorFallbackRender } from "@/components/error-fallback-render/error-fallback-render";

export const App = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <ErrorBoundary fallbackRender={errorFallbackRender}>
      <Provider store={store}>{children}</Provider>
    </ErrorBoundary>
  );
};
