import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  setCustom,
} from "../redux/reducer/counter/CounterSlice";

const Counter = () => {
  const myNum = useRef();
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card-header bg-secondary">
        <h4 className="text-white">Counter App</h4>
      </div>
      <div className="card-body">
        <h1>{count}</h1>
        <div className="my-5">
          <button
            onClick={() => {
              dispatch(increment());
            }}
            className="btn btn-success"
          >
            Increase
          </button>
          <button
            onClick={() => {
              dispatch(decrement());
            }}
            className="btn mx-2 btn-danger"
          >
            Increase
          </button>
        </div>
        <div className="my-5">
          <input ref={myNum} className="from-control w-50 my-2" type="number" />
          <br />
          <button
            onClick={() => dispatch(setCustom(myNum.current.value))}
            className="btn w-50 my-2 btn-danger"
          >
            Set custom
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
