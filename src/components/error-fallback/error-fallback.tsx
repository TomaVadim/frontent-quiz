import { PropsWithChildren } from "react";

interface Props {
  error: Error;
  title: string;
}

export const ErrorFallback = ({
  error,
  title,
  children,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <section role="alert">
      <h2>{title}</h2>

      <pre>{error.message}</pre>

      {children}
    </section>
  );
};
