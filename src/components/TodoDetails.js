import React from "react";
// import "./css/styles.css";

const TodoDetails = (props) => (
  <div className="container">
    <div className="table-wrapper">
      <div className="table-title">
        <div className="row">
          <br></br>
        </div>
      </div>

      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Title(s)</th>
            <th scope="col">Note(s)</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        {props.todos.length > 0 ? (
          props.todos.map((todo) => (
            <tbody key={todo.id}>
              <tr>
                <th scope="row">{todo.title}</th>
                {/* <td>Mark</td> */}
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
            </tbody>
          ))
        ) : (
          <p>
            <tr>
              <th>
                <div className="col-sm-12 text-danger">
                  <h2 text-center>
                    <b>You dont have any todo pending!</b>
                  </h2>
                </div>
              </th>
            </tr>
          </p>
        )}
      </table>
    </div>
  </div>
);

export default TodoDetails;
