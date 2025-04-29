import { Lia500Px } from "react-icons/lia";
import groups from "../data/rock-groups.json";
import css from "./Rock.module.css";
import RockItem from "./RockItem";
const Rock = ({ children }) => {
  return (
    <div>
      <h1 className={css.title}>Rock music {children}</h1>
      <ul className={css.list}>
        {groups.map((group, id) => {
          return (
            <li key={id} className={css.item}>
              <RockItem item={group} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Rock;
