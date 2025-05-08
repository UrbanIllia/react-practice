import Task from "./Task";
import css from "./TaskList.module.css";

const TaskList = ({ tasks, onDelete }) => {
  return (
    <ul>
      {tasks.map((item) => {
        return (
          <li key={item.id}>
            <Task data={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
};

export default TaskList;
