import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { TodoDeleteAlart } from "../../components/TodoDeleteAlart";
import { TodoEditAlart } from "../../components/TodoEditAlart";

const TodoList = () => {
  const taskItem = useSelector((state) => state.todo.value);
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Task Name</th>
                <th>Edit</th>
                <th>Remove</th>
              </tr>
            </thead>

            <tbody>
              {taskItem.map((item, i) => {
                return (
                  <tr key={i.toString()}>
                    <td>{i}</td>
                    <td>{item}</td>
                    <td>
                      <button
                        onClick={() => TodoEditAlart(i)}
                        className="btn btn-sm btn-success"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => TodoDeleteAlart(i)}
                        className="btn btn-sm btn-danger"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
