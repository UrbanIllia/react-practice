import { useEffect, useState } from "react";
import axios from "axios";
import css from "./Articles2.module.css";
import ArticleList from "../ArticleList";
import Articles2List from "./Articles2List";

const Articles2 = () => {
  const [cards, setCards] = useState([]);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    async function fetchArticles() {
      try {
        setLoader(true);
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        setCards(response.data.hits);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchArticles();
  }, []);
  return (
    <div className={css.wrap}>
      <h1 className={css.title}>Latest articles</h1>
      {loader && <p className={css.loader}>Loading data, please wait...</p>}
      {cards.length > 0 && <Articles2List cards={cards} />}
    </div>
  );
};

export default Articles2;
