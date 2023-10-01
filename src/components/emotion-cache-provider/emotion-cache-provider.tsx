import { PropsWithChildren } from "react";

import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";

export const EmotionCacheProvider = ({ children }: PropsWithChildren) => {
  return <CacheProvider value={cache}>{children}</CacheProvider>;
};
