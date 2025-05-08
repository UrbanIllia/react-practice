import Task from "./Task";
import css from "./TaskList.module.css";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul className={css.ul}>
      {tasks.map((item) => {
        return (
          <li key={item.id} className={css.lili}>
            <Task data={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
