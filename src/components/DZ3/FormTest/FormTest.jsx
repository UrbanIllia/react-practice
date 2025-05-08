import clsx from "clsx";
import Filter from "./Filter";
import Form from "./Form";
import TaskList from "./TaskList";
import css from "./FormTest.module.css";
import initialTasks from "../../DZ2/data/todos.json";
import { useState } from "react";

const FormTest = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [filter, setFilter] = useState("");
  const addTask = (newTask) => {
    setTasks((prevTasks) => {
      return [...prevTasks, newTask];
    });
  };
  const deleteTask = (id) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((item) => item.id !== id);
    });
  };
  const visibleTasks = tasks.filter((item) =>
    item.todo.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={clsx(css.flexColumn)}>
      <Form onAdd={addTask} />
      <Filter value={filter} onFilter={setFilter} />
      <TaskList tasks={visibleTasks} onDelete={deleteTask} />
    </div>
  );
};

export default FormTest;
