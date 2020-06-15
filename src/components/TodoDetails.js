import React from "react";
import "./css/styles.css";

const TodoDetails = (props) => (
  <div class="container">
    <div class="table-wrapper">
      <div class="table-title">
        <div class="row">
          <div class="col-sm-12">
            <h2>
              <b>Todo List</b>
            </h2>
          </div>
        </div>
      </div>
      <table class="table table-striped table-hover">
        <thead class="table-title">
          <tr>
            <th>
              <h2>Title(s)</h2>
            </th>
            <th>
              <h2>Note(s)</h2>
            </th>
            <th>
              <h2>Actions</h2>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.todos.length > 0 ? (
            props.todos.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.title}</td>
                <td>{todo.details}</td>

                <td>
                  <button
                    onClick={() => props.editSingleTask(todo)}
                    className="btn  btn-primary"
                  >
                    Edit
                  </button>
                  <span> </span>
                  <button
                    onClick={() => props.deleteTask(todo.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <p>
              <tr>
                <th>
                  {" "}
                  <div class="col-sm-12 text-danger">
                    <h2 text-center>
                      <b>You dont have any todo pending!</b>
                    </h2>
                  </div>
                </th>
              </tr>
            </p>
          )}
        </tbody>
      </table>
    </div>
  </div>
);

export default TodoDetails;
