const ArticlesList = ({ articles, openImage }) => {
  console.log(articles);
  return (
    <ul className="grid grid-cols-3 gap-5 justify-center items-center">
      {articles.map((item) => (
        <li
          key={item.id}
          className="flex flex-col justify-center items-center"
          onClick={() => openImage(item)}
        >
          <img src={item.urls.small} alt={item.description || "Image"} />
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
