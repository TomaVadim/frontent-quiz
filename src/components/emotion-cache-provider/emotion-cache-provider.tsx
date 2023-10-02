import { PropsWithChildren } from "react";

import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({
  key: "mui",
});
export const EmotionCacheProvider = ({ children }: PropsWithChildren) => {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};
