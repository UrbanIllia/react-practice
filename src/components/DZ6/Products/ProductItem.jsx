import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCartItem, removeCartItem } from '../../../redux/cartSlice';
import { toast } from 'react-toastify';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';
import {
  addFavProduct,
  removeFavProducts,
} from '../../../redux/FavouritesSlice';
import { IoHeartOutline, IoHeartSharp } from 'react-icons/io5';

const ProductItem = ({ item }) => {
  const cart = useSelector((state) => state.cart.cartItems);
  const favourites = useSelector((state) => state.favourites.favProducts);
  const dispatch = useDispatch();
  const { id, title, description, thumbnail } = item;

  const isExist = cart.some((item) => item.id === id);
  const isExistFav = favourites.some((item) => item.id === id);

  const handleAddProduct = () => {
    if (id && title) {
      dispatch(addCartItem(item));
      toast.success(`${title} added to cart!`, {
        position: 'top-right',
        autoClose: 3000,
      });
    } else {
      toast.error('Invalid product data');
    }
  };

  const handleRemoove = () => {
    dispatch(removeCartItem(id));
    toast.success(`${title} remove from cart`);
  };

  const handleAddFav = () => {
    dispatch(addFavProduct(item));
  };
  const handleRemoveFav = (id) => {
    dispatch(removeFavProducts(id));
  };

  return (
    <li className="card bg-base-100 relative shadow-sm" key={id}>
      {isExist && (
        <div className="absolute top-3 right-3 flex flex-col items-center justify-center text-red-500">
          <p>In Cart</p>
          <MdOutlineShoppingCart size={20} />
        </div>
      )}
      <Link to={item.id.toString()} className="transition hover:scale-[1.10]">
        <figure>
          {thumbnail ? (
            <img src={thumbnail} alt={title} />
          ) : (
            <p className="text-red-500">No image available</p>
          )}
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          {isExist ? (
            <div className="flex w-full justify-between">
              <Link to="/product-shop/cart" className="btn btn-secondary">
                Go to cart
              </Link>
              <button className="btn btn-error" onClick={handleRemoove}>
                Remove
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={handleAddProduct}>
              Add to cart
            </button>
          )}
        </div>
        <Link to={item.id.toString()} className="btn btn-soft btn-info">
          Show details
        </Link>
      </div>
      {isExistFav ? (
        <button
          className="btn btn-circle absolute top-3 left-3"
          onClick={() => handleRemoveFav(id)}
        >
          <IoHeartSharp />
        </button>
      ) : (
        <button
          className="btn btn-circle absolute top-3 left-3"
          onClick={handleAddFav}
        >
          <IoHeartOutline />
        </button>
      )}
    </li>
  );
};

export default ProductItem;
