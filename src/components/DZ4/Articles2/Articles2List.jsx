import { LuMousePointerClick } from "react-icons/lu";
import css from "./Articles2.module.css";

const Articles2List = ({ cards }) => {
  return (
    <ul className={css.list}>
      {cards.map(({ objectID, url, title }) => {
        return (
          <li key={objectID} className={css.item}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer noopener"
              className={css.link}
            >
              {title}
            </a>
            <LuMousePointerClick size={30} color="#ff5722" />
          </li>
        );
      })}
    </ul>
  );
};

export default Articles2List;
