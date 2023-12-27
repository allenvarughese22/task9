import React, { useState } from "react";
import "./TodoList.css";

interface Task {
  id: number;
  title: string;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState("");

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask === "") return;
    setTasks([...tasks, { id: Date.now(), title: newTask }]);
    setNewTask("");
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <form onSubmit={addTask} className="form-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
          className="input-field"
        />
        <button type="submit" className="add-button">
          Add
        </button>
      </form>
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task">
            <span className="task-title">{task.title}</span>
            <button
              className="delete-button"
              onClick={() => deleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
