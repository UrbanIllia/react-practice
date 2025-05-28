import Button from "../../../DZ1/Button/Button";
import css from "./StatusFilter.module.css";
import { useSelector } from "react-redux";
const StatusFilter = () => {
  const filter = useSelector((state) => state.filters.status);
  return (
    <div className={css.wrapper}>
      <Button>Al {filter === "all" && "is active"}</Button>
      <Button>Active {filter === "active" && "is active"}</Button>
      <Button>Completed {filter === "completed" && "is active"}</Button>
    </div>
  );
};
export default StatusFilter;
