import { Lia500Px } from "react-icons/lia";
import groups from "../data/rock-groups.json";
import css from "./Rock.module.css";
import RockItem from "./RockItem";
import { HandMetal } from "lucide-react";
const Rock = () => {
  return (
    <div className={css.wrapp}>
      <h1 className={css.title}>Rock music</h1>
      <HandMetal size={38} color="gold" />
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
