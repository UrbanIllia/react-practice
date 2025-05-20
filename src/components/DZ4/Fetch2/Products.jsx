import { useEffect, useState } from "react";
import List from "./List";
import css from "./Products.module.css";
import { fetchProducts } from "../articles-api";
import { fetchSearchProduct } from "../articles-api";
import SearchBar2 from "./Item/SearchBar2";
import { BsTrash } from "react-icons/bs";

const Products = () => {
  // https://dummyjson.com/products/search
  const [products, setProducts] = useState([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [query, setQuery] = useState("");
  const [favorite, setFavorite] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    const getData = async () => {
      try {
        const data = query.trim()
          ? await fetchSearchProduct({ query })
          : await fetchProducts({ skip, signal: controller.signal });
        setTotal(data.total);
        setProducts((prev) => [...prev, ...data.products]);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      controller.abort();
    };
  }, [skip, query]);
  const handleChangeQuery = (newQuery) => {
    setQuery(newQuery);
    setProducts([]);
    setSkip(0);
  };
  const addToFavourite = (product) => {
    setFavorite([...favorite, product]);
  };
  const deleteFromFavourite = (product) => {
    setFavorite(favorite.filter((item) => item.id !== product.id));
  };
  return (
    <div className={css.productWrap}>
      <SearchBar2 handleChangeQuery={handleChangeQuery} />
      <section className={css.listWrap}>
        <div className={css.wrap1}>
          {" "}
          {products.length > 0 ? (
            <List products={products} addToFavourite={addToFavourite} />
          ) : (
            <h2 style={{ color: "yellow" }}>Nothing to load....</h2>
          )}
          <div className={css.btnwrap}>
            {products.length < total && (
              <button onClick={() => setSkip(skip + 30)} className="button">
                Load more
              </button>
            )}
          </div>
        </div>
        <div className={css.wrap2}>
          <h2 style={{ color: "yellow" }} className={css.TitleFavouteWrap}>
            Favorites
          </h2>
          <h3 style={{ color: "yellow" }}>
            Total price:{" "}
            {favorite.reduce((total, curr) => curr.price + total, 0)}
          </h3>
          <ul className={css.listFav}>
            {favorite.map((item) => {
              return (
                <li key={item.id} className={css.itemFav}>
                  <img
                    src={item.thumbnail}
                    alt=""
                    width="100"
                    className={css.img}
                  />
                  <p className={css.title}>{item.title}</p>
                  <button
                    className={css.btnRemove}
                    onClick={() => deleteFromFavourite(item)}
                  >
                    <BsTrash />
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Products;
