import { FallbackProps } from "react-error-boundary";

import { ErrorFallback } from "@/components/error-fallback/error-fallback";

export const errorFallbackRender = ({
  error,
  resetErrorBoundary,
}: FallbackProps): JSX.Element => {
  return (
    <ErrorFallback title="Something went wrong:" error={error}>
      <button onClick={resetErrorBoundary}>Reset error</button>
    </ErrorFallback>
  );
};
