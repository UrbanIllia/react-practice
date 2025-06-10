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
          </li>
        );
      })}
    </ul>
  );
};

export default Articles2List;
