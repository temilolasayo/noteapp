import React, { useState } from "react";

const EditTaskForm = (props) => {
  const [todo, setTodo] = useState(props.currentTask);

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };
  return (
    <div>
      <br />
      <form
        onSubmit={(e) => {
          props.updateTask(todo.id, todo);
        }}
      >
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Title
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="title"
              value={todo.title}
              onChange={onChangeInput}
              className="form-control"
              id="title"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="title" className="col-sm-2 col-form-label">
            Note
          </label>
          <div className="col-sm-10">
            <textarea
              className="form-control"
              id="details"
              name="details"
              value={todo.details}
              onChange={onChangeInput}
              rows="4"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-success">
          Update Task
        </button>
        <span> </span>
        <button
          onClick={() => props.SetEditTask(false)}
          className="btn btn-primary"
          type="submit"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditTaskForm;
