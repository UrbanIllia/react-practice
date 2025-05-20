import css from "../DZ4/ArticleList.module.css";

const ArticleList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map((item) => (
        <li key={item.objectID} className={css.item}>
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer noopener"
            className={css.link}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ArticleList;
