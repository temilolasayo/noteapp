import React, { useState } from "react";

const AddTask = (props) => {
  const todoLists = {
    id: null,
    title: "",
    details: "",
  };
  const [todos, setTodos] = useState(todoLists);
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setTodos({
      ...todos,
      [name]: value,
    });
  };

  // const addDetails = (todo) => {
  //   let today = new Date().toISOString().substr(0, 10);
  //   document.querySelector("#today").value = today;
  //   todo.id = todos.length + 1;
  //   todo.date = today;
  //   console.log(todo.date);
  //   setTodos([...todos, todo]);
  // };

  return (
    <div>
      <br />
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!todos.title || !todos.details) return;
          props.addDetails(todos);
          setTodos(todoLists);
        }}
      >
        {/* <div className="form-group">
          <label for="title">Title</label>
          <input
            class="form-control"
            id="title"
            // placeholder="name@example.com"
            type="text"
            name="title"
            value={todos.title}
            onChange={onChangeInput}
          />
        </div> */}
        <div class="form-group row">
          <label for="title" class="col-sm-2 col-form-label">
            Title
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              name="title"
              value={todos.title}
              onChange={onChangeInput}
              class="form-control"
              id="title"
              placeholder="Title"
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
              id="exampleFormControlTextarea1"
              name="details"
              value={todos.details}
              onChange={onChangeInput}
              rows="4"
              placeholder="Write your notes here!!!"
            ></textarea>
          </div>
        </div>
        {/* <div class="form-group">
          <label for="exampleFormControlTextarea1">Note </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            name="details"
            value={todos.details}
            onChange={onChangeInput}
            rows="4"
          ></textarea>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Add New Task
        </button>
      </form>
      {/* <form>
        <input id="today" type="date"></input>
        <label>Title</label>
        <input
          type="text"
          name="title"
          value={todos.title}
          onChange={onChangeInput}
        />
        <label>Details</label>
        <input
          type="text"
          name="details"
          value={todos.details}
          onChange={onChangeInput}
        />
        <button type="submit" className="btn btn-primary">
          Add New Task
        </button>
      </form> */}
    </div>
  );
};

export default AddTask;
