import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import { ErrorBoundary } from "react-error-boundary";

import store from "@/stores/redux/store";
import { generateTheme } from "@/theme/theme";
import { EmotionCacheProvider } from "@/providers/emotion-cache/emotion-cache-provider";
import { errorFallbackRender } from "@/components/error-fallback-render/error-fallback-render";

export const App = ({ children }: PropsWithChildren): JSX.Element => {
  return (
    <ErrorBoundary fallbackRender={errorFallbackRender}>
      <EmotionCacheProvider>
        <ThemeProvider theme={generateTheme()}>
          <Provider store={store}>{children}</Provider>
        </ThemeProvider>
      </EmotionCacheProvider>
    </ErrorBoundary>
  );
};
