import css from "./ToDoItem.module.css";
const ToDoItem = ({ todo, completed, id }) => {
  return (
    <li className={css.item}>
      <input className={css.input} type="checkbox" />
      <span className={css.span}>{todo}</span>
      <button className={css.btn}>Delete</button>
    </li>
  );
};

export default ToDoItem;
