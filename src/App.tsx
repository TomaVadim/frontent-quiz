import { Provider } from "react-redux";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "@emotion/react";
import { ErrorBoundary } from "react-error-boundary";

import store from "@/stores/redux/store";
import { errorFallbackRender } from "@/components/error-fallback-render/error-fallback-render";
import { EmotionCacheProvider } from "@/components/emotion-cache-provider/emotion-cache-provider";
import { generateTheme } from "@/theme/theme";

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
