import { FC, useRef, FormEvent } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./sing-in.module.css";
import { AppDispatch, RootState } from "../../../stores/store";
import { unshow } from "../../../stores/redux/modal/reducers/modal-reducer";

import { CSSTransition } from "react-transition-group";

import CloseIcon from "@mui/icons-material/Close";

export const SingIn: FC = () => {
  const modalRef = useRef(null);
  const { value } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(unshow());
  };

  const handleUnshowModal = () => {
    dispatch(unshow());
  };

  return (
    <>
      {value && (
        <CSSTransition
          nodeRef={modalRef}
          in={value}
          classNames={{
            enter: style.fadeEnter,
            enterActive: style.fadeEnterActive,
            exit: style.fadeExit,
            exitActive: style.fadeExitActive,
          }}
          unmountOnExit
          timeout={300}
        >
          <div ref={modalRef} className={style.container}>
            <dialog className={style.modal}>
              <button onClick={handleUnshowModal} className={style.closeBtn}>
                <CloseIcon />
              </button>
              <h3 className={style.title}>Sing in:</h3>
              <form onSubmit={handleSubmit} className={style.form}>
                <label className={style.label} htmlFor="login">
                  Login:
                  <input className={style.input} id="login" type="text" />
                </label>
                <label className={style.label} htmlFor="password">
                  Password:
                  <input className={style.input} id="password" type="password" />
                </label>
                <button className={style.button} type="submit">
                  Sing in
                </button>
              </form>
            </dialog>
          </div>
        </CSSTransition>
      )}
    </>
  );
};
