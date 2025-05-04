import { RiTodoLine } from "react-icons/ri";
import css from "./ToDoItem.module.css";
import clsx from "clsx";
const ToDoItem = ({
  todo,
  completed,
  id,
  handleDeleteItem,
  handleToggleTodo,
}) => {
  return (
    <li className={clsx(css.item, completed && css.completed)}>
      <RiTodoLine className={css.icon} size={45} />
      <input
        checked={completed}
        className={css.input}
        type="checkbox"
        onChange={() => handleToggleTodo(id)}
      />
      <span className={css.span}>{todo}</span>
      <button className={css.btn} onClick={() => handleDeleteItem(id)}>
        Delete
      </button>
    </li>
  );
};

export default ToDoItem;
