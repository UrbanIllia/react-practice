import { useState } from "react";
import css from "./Articles2.module.css";
import Articles2List from "./Articles2List";
import { fetchArticlesWithTopic } from "./articles-api.js";
import Loader from "./Loader.jsx";
import Error from "./Error.jsx";
import SearchForm2 from "./SearchForm2.jsx";

const Articles2 = () => {
  const [cards, setCards] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);

  const onHandleSearch = async (topic, page = 0) => {
    try {
      setCards([]);
      setError("");
      setLoader(true);
      const data = await fetchArticlesWithTopic(topic, page);
      setCards((prevCards) => [...prevCards, ...data]);
    } catch (error) {
      setError("Failed to fetch articles. Please try again later.");
      console.log("Error:", error);
    } finally {
      setLoader(false);
    }
  };

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    onHandleSearch(query || "Kiev", nextPage);
  };

  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Latest articles</h1>
      <SearchForm2 onSearch={onHandleSearch} />
      {error && <Error error={error} />}
      {loader && <Loader />}
      {cards.length > 0 && <Articles2List cards={cards} />}
      {cards.length > 0 && (
        <button className={css.btnLoad} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default Articles2;
