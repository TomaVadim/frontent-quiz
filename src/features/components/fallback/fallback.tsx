import { FC } from "react";

import style from "./fallback.module.css";

type Props = {
  error: Error;
  resetErrorBoundary: () => void;
};

export const Fallback: FC<Props> = ({ error, resetErrorBoundary }) => {
  return (
    <div className={style.container} role="alert">
      <h2>Something went wrong:</h2>
      <pre className={style.error}>{error.message}</pre>
      <button className={style.button} onClick={resetErrorBoundary}>
        Try again
      </button>
    </div>
  );
};
