import { useDispatch, useSelector } from 'react-redux';
import { removeFavProducts } from '../../../redux/FavouritesSlice';
import { GiHeartMinus } from 'react-icons/gi';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { addCartItem, removeCartItem } from '../../../redux/cartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillCartPlusFill, BsFillCartXFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { GrCircleInformation } from 'react-icons/gr';

const Favourites = () => {
  const favourites = useSelector((state) => state.favourites.favProducts);
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  if (favourites.length === 0) {
    return (
      <div className="mt-10">
        <img
          src="https://cdn-icons-png.freepik.com/256/10218/10218522.png"
          alt="No favourites yet"
          width="600"
        />
      </div>
    );
  }

  const handleRemoveFav = (id, title) => {
    dispatch(removeFavProducts(id));
    toast.success(`${title} removed from favorites!`, {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const handleAddToCart = (item) => {
    dispatch(addCartItem(item));
    toast.success(`${item.title} added to cart!`, {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  const handleRemoveFromCart = (id, title) => {
    dispatch(removeCartItem(id));
    toast.success(`${title} removed from cart!`, {
      position: 'top-right',
      autoClose: 3000,
    });
  };

  return (
    <div>
      <h2 className="mb-8 text-center text-4xl font-black">
        Favourites products
      </h2>
      <ul className="grid grid-cols-3 gap-5">
        {favourites.map((item) => {
          const isExist = cart.some((cartItem) => cartItem.id === item.id);
          return (
            <li key={item.id} className="card bg-base-100 w-70 shadow-sm">
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <figure>
                <img src={item.thumbnail} alt="Shoes" />
              </figure>

              <button
                className="btn btn-square absolute bottom-3 left-3"
                onClick={() => handleRemoveFav(item.id, item.title)}
              >
                <GiHeartMinus color="red" />
              </button>
              {isExist ? (
                <button
                  className="btn btn-square absolute bottom-[60px] left-3"
                  onClick={() => handleRemoveFromCart(item.id, item.title)}
                >
                  <BsFillCartXFill size={20} color="red" />
                </button>
              ) : (
                <button
                  className="btn btn-square absolute bottom-[60px] left-3"
                  onClick={() => handleAddToCart(item)}
                >
                  <BsFillCartPlusFill size={20} />
                </button>
              )}

              {isExist && (
                <div className="absolute right-2 bottom-2 flex flex-col items-center justify-center text-red-500">
                  <p>In Cart</p>
                  <MdOutlineShoppingCart size={16} />
                </div>
              )}
              <Link
                to={`/product-shop/products/${item.id}`}
                className="btn btn-square absolute bottom-[110px] left-3"
              >
                <GrCircleInformation size={20} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favourites;
