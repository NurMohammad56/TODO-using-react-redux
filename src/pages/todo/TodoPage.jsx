import React from "react";
import CreateTodo from "../../components/CreateTodo";
import TodoList from "../../components/TodoList";

const TodoPage = () => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h1>My Todo App</h1>
            </div>
            <div className="card-body">
              <CreateTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoPage;
