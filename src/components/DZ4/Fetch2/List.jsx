import Item from "./Item/Item";
import css from "./List.module.css";

const List = ({ products, addToFavourite }) => {
  return (
    <ul className={css.listWrap}>
      {products.map((item) => {
        return (
          <Item product={item} key={item.id} addToFavourite={addToFavourite} />
        );
      })}
    </ul>
  );
};

export default List;
