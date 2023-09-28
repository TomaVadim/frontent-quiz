import { FC } from "react";

import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import style from "./navbar.module.css";
import { AppDispatch } from "../../stores/redux/store";
import { show } from "../../stores/redux/modal/actions/modal-actions";

export const Navbar: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleShowModal = () => {
    dispatch(show());
  };

  return (
    <nav className={style.navbar}>
      <ul className={style.list}>
        <li className={style.item}>
          <Link to="/">Home</Link>
        </li>
        <li className={style.item}>Get started</li>
        <li className={style.item}>Features</li>
        <li className={style.item}>About</li>
      </ul>
      <ul className={style.list}>
        <li>
          <button className={style.log}>Log in</button>
        </li>
        <li>
          <button onClick={handleShowModal} className={style.sign}>
            Sing in
          </button>
        </li>
      </ul>
    </nav>
  );
};
