import React, { useState } from "react";
import TodoTask from "./Components/TodoTask";
import { ITask } from "./Interfaces";
import './App.css';

const App = () => {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState(0);
  const [todoList, setTodoList] = useState([]);

  const handleChange = (event) => {
    if (event.target.name === "task") {
      setTask(event.target.value);
    } else {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = () => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask("");
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete) => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete;
      })
    );
  };

  const updateTask = (taskNameToUpdate, updatedTaskName) => {
    setTodoList(
      todoList.map((task) => {
        if (task.taskName === taskNameToUpdate) {
          return { ...task, taskName: updatedTaskName };
        }
        return task;
      })
    );
  };

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            value={task}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Deadline (in Days)..."
            name="deadline"
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="todoList">
        {todoList.map((task, key) => {
          return (
            <TodoTask
              key={key}
              task={task}
              completeTask={completeTask}
              updateTask={updateTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
