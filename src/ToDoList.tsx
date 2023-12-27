import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // Provide a type annotation for tasks
  const [newTask, setNewTask] = useState("");

  const addTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTask === "") return;
    setTasks([...tasks, { id: Date.now(), title: newTask }]);
    setNewTask("");
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add new task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
