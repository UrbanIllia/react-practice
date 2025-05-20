import css from "./Articles.module.css";
import { fetchArticlesWithTopic } from "../DZ4/articles-api";
import ArticleList from "./ArticleList";
import SearchForm from "./SearchForm";
import { useState } from "react";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (topic) => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      const data = await fetchArticlesWithTopic(topic);
      setArticles(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={css.mainWrap}>
      <h1 className={css.title}>Latest articles</h1>
      <SearchForm onSearch={handleSearch} />
      {loading && <p className={css.loading}>Loading, please wait...</p>}
      {error && (
        <p className={css.loading}>
          Whoops, something went wrong! Please try reloading this page!
        </p>
      )}
      {articles.length > 0 && <ArticleList data={articles} />}
    </div>
  );
};

export default Articles;
