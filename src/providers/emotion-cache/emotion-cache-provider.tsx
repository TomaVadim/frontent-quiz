import { PropsWithChildren } from "react";

import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

const cache = createCache({
  key: "mui",
});

export const EmotionCacheProvider = ({ children }: PropsWithChildren): JSX.Element => {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};
