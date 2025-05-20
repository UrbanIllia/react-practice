import { FcLike } from "react-icons/fc";
import css from "./Item.module.css";

const Item = ({ product, addToFavourite }) => {
  return (
    <li className={css.item}>
      <img src={product.thumbnail} className={css.img} />
      <span className={css.text}>{product.title}</span>
      <button className={css.btn} onClick={() => addToFavourite(product)}>
        <FcLike size={30} />
      </button>
    </li>
  );
};

export default Item;
