import React, { useState } from "react";
import TodoDetails from "./TodoDetails";
import "bootstrap/dist/css/bootstrap.css";
import AddTask from "./AddTask";
import EditTaskForm from "./EditTaskForm";

function Home() {
  //   const todoListsData = [];

  const todoListsData = [
    { id: 1, title: "Read", details: "I will love to read today" },
    { id: 2, title: "Dance", details: "I will love to dance today" },
    { id: 3, title: "Jump", details: "I will love to jump today" },
    { id: 4, title: "Sing", details: "I will love to sing today" },
    { id: 5, title: "Stand", details: "I will love to stand today" },
    { id: 6, title: "Code", details: "I will love to code today" },
    { id: 7, title: "Sleep", details: "I will love to sleep today" },
  ];

  const [todos, setTodos] = useState(todoListsData);

  const [editTask, SetEditTask] = useState(false);
  const intialTaskState = { id: null, title: "", details: "" };
  const [currentTask, setCurrentTask] = useState(intialTaskState);

  const addDetails = (todo) => {
    todo.id = todos.length + 1;
    setTodos([...todos, todo]);
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const editSingleTask = (todos) => {
    SetEditTask(true);
    setCurrentTask({
      id: todos.id,
      title: todos.title,
      details: todos.details,
    });
  };

  const updateTask = (id, updatedTask) => {
    SetEditTask(false);
    setTodos(todos.map((todo) => (todo.id === id ? updatedTask : todo)));
  };

  return (
    <div className="container">
      <h1>My Note App</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editTask ? (
            <div>
              {/* <h2>Edit Task</h2> */}
              <EditTaskForm
                SetEditTask={SetEditTask}
                currentTask={currentTask}
                updateTask={updateTask}
              />
            </div>
          ) : (
            <div>
              {/* <h2>Add Task</h2> */}
              <AddTask addDetails={addDetails} />
            </div>
          )}
        </div>
        <div className="flex-large">
          {/* <h2>View Todo(s)</h2> */}
          <TodoDetails
            todos={todos}
            deleteTask={deleteTask}
            editSingleTask={editSingleTask}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
