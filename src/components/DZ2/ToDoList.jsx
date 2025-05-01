import todos from "./data/todos.json";
import ToDoItem from "./ToDoItem";
import css from "./ToDoList.module.css";
const ToDoList = () => {
  return (
    <div>
      <div className={css.flex}>
        <input className={css.input} type="text" />
        <button className={css.button}>Add</button>
      </div>
      <ul className={css.list}>
        {todos.map((todo) => {
          return <ToDoItem key={todo.id} {...todo} />;
        })}
      </ul>
    </div>
  );
};

export default ToDoList;
