import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddTodo } from "../redux/reducer/todo/todoSlice";

const CreateTodo = () => {
  const dispatch = useDispatch();
  const taskName = useRef();
  return (
    <div className="conatiner">
      <div className="row">
        <div className="col-md-10">
          <input
            ref={taskName}
            className="form-control"
            type="text"
            placeholder="Task Name"
          />
        </div>
        <div className="col-md-2">
          <button
            onClick={() => dispatch(AddTodo(taskName.current.value))}
            className="btn  btn-primary"
          >
            Add To Do
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
