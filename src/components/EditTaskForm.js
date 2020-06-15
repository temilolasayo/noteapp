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
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label">
            Title
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              name="title"
              value={todo.title}
              onChange={onChangeInput}
              class="form-control"
              id="title"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label">
            Note
          </label>
          <div class="col-sm-10">
            <textarea
              class="form-control"
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
          onClick={() => props.setEditing(false)}
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
