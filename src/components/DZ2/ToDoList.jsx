import { FcTodoList } from "react-icons/fc";
import toDos from "./data/todos.json";
import ToDoItem from "./ToDoItem";
import css from "./ToDoList.module.css";
import { useEffect, useState } from "react";
import { BsEmojiSmileUpsideDown, BsFillBalloonFill } from "react-icons/bs";
import { PiSmileySad } from "react-icons/pi";
import { GiHamburger } from "react-icons/gi";
const ToDoList = () => {
  const [todos, setTodos] = useState(() => {
    try {
      const savedData = localStorage.getItem("ToDo-data");
      return savedData !== null ? JSON.parse(savedData) : toDos;
    } catch {
      return [];
    }
  });
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
    if (!todoValue || todoValue.trim() === "") {
      alert("Введи бляха что-то нормальное...");
      return;
    }

    const NewToDo = {
      id: crypto.randomUUID(),
      todo: todoValue,
      completed: false,
    };
    setTodos([...todos, NewToDo]);
    setTodoValue("");
  };
  useEffect(() => {
    localStorage.setItem("ToDo-data", JSON.stringify(todos));
  }, [todos]);
  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Ну очень и очень обязательные дела!</h1>
      <div className={css.silewrap}>
        <GiHamburger size={60} className={css.smile} />
        <BsFillBalloonFill size={60} className={css.smile} />
        <BsEmojiSmileUpsideDown size={60} className={css.smile} />
        <PiSmileySad size={60} className={css.smile} />
        <BsEmojiSmileUpsideDown size={60} className={css.smile} />
        <BsFillBalloonFill size={60} className={css.smile} />
        <GiHamburger size={60} className={css.smile} />
      </div>
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
