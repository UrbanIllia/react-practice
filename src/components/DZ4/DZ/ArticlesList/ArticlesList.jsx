const ArticlesList = ({ articles, onImageClick }) => {
  return (
    <ul className="grid grid-cols-4 gap-4 px-10 mx-auto mb-5">
      {articles.map((item) => (
        <li key={item.id} onClick={() => onImageClick(item)}>
          <img
            src={item.urls.small}
            alt={item.alt_description || "Unsplash image"}
          />
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
