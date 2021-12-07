import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as counterActions from "../../actions/counterAction";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counterReducer.count);

  return (
    <div>
      <button onClick={() => dispatch(counterActions.count_up)}>+</button>
      <span>Counter: {count} </span>
      <button onClick={() => dispatch(counterActions.count_down)}>-</button>
    </div>
  );
}

export default Counter;
