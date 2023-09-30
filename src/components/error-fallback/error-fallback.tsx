import { FC } from "react";

interface Props {
  error: Error;
  onErrorReset?: () => void;
};

export const ErrorFallback: FC<Props> = ({ error, onErrorReset }) => {
  return (
    <section role="alert">
      <h2>Something went wrong:</h2>

      <pre>{error.message}</pre>

      <button onClick={onErrorReset}></button>
    </section>
  );
};
