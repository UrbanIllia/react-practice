import { setStatusFilter } from "../../../../redux/actions";
import Button from "../../../DZ1/Button/Button";
import css from "./StatusFilter.module.css";
import { useDispatch, useSelector } from "react-redux";
const StatusFilter = () => {
  const filter = useSelector((state) => state.filters.status);
  const dispatch = useDispatch();
  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));
  return (
    <div className={css.wrapper}>
      <Button onClick={() => handleFilterChange("all")}>Al</Button>
      <Button onClick={() => handleFilterChange("active")}>Active</Button>
      <Button onClick={() => handleFilterChange("completed")}>Completed</Button>
    </div>
  );
};
export default StatusFilter;
