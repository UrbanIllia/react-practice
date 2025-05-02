import { FcTodoList } from "react-icons/fc";
import toDos from "./data/todos.json";
import ToDoItem from "./ToDoItem";
import css from "./ToDoList.module.css";
import { useState } from "react";
const ToDoList = () => {
  const [todos, setTodos] = useState(toDos);
  const [todoValue, setTodoValue] = useState("");
  // ............................................
  const handleDeleteItem = (id) => {
    const NewData = todos.filter((item) => item.id !== id);
    setTodos(NewData);
    // setTodos(todos.filter((item) => item.id !== id));
  };

  const handleAddItem = (event) => {
    setTodoValue(event.target.value);
  };

  const handleToggleTodo = (id) => {
    // const NewData = todos.map((item) => {
    //   if (item.id === id) {
    //     return { ...item, completed: !item.completed };
    //   } else {
    //     return item;
    //   }
    // });
    const NewData = todos.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodos(NewData);
  };

  const handleDeleteSelected = () => {
    const NewData = todos.filter((item) => !item.completed);
    setTodos(NewData);
  };
  // ........................................
  const addTodoItem = () => {
    const NewToDo = {
      id: crypto.randomUUID(),
      todo: todoValue,
      completed: false,
    };
    setTodos([...todos, NewToDo]);
    setTodoValue("");
  };

  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Ну очень и очень обязательные дела</h1>
      <div className={css.flex}>
        <FcTodoList className={css.icon} size={40} />
        <input
          className={css.input}
          type="text"
          value={todoValue}
          onChange={handleAddItem}
        />
        <button onClick={addTodoItem} className={css.button}>
          Add
        </button>
      </div>
      <button className={css.button2} onClick={handleDeleteSelected}>
        Delete all completed
      </button>
      <ul className={css.list}>
        {todos.map((todo) => {
          return (
            <ToDoItem
              key={todo.id}
              {...todo}
              handleDeleteItem={handleDeleteItem}
              handleToggleTodo={handleToggleTodo}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
