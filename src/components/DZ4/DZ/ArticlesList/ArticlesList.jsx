const ArticlesList = ({ articles, onImageClick }) => {
  return (
    <ul className="grid grid-cols-3 gap-8 p-6">
      {articles.map((item) => (
        <li
          key={item.id}
          className="flex flex-col justify-center items-center w-[100%]"
          onClick={() => onImageClick(item)}
        >
          <img
            src={item.urls.small}
            alt={item.alt_description || "Image"}
            className="image w-full h-auto object-cover block"
          />
        </li>
      ))}
    </ul>
  );
};

export default ArticlesList;
