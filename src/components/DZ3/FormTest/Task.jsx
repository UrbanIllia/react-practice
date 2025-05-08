import css from "./Task.module.css";

const Task = ({ data: { id, todo }, onDelete }) => {
  return (
    <div className={css.div}>
      <p className={css.p}>{todo}</p>
      <button onClick={() => onDelete(id)} className={css.button}>
        Delete
      </button>
    </div>
  );
};

export default Task;
