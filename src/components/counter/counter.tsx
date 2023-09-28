import { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../stores/redux/counter-reducer";
import { RootState } from "../../stores/store";

export const Counter: FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};
