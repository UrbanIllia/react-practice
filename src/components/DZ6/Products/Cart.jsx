import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeCartItem } from '../../../redux/cartSlice';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, current) => current.price + total, 0);
  const total = Number(totalPrice.toFixed(2));

  const handleClear = () => {
    dispatch(clearCart());
    toast.success('Cart is empty');
  };

  return (
    <section className="container mx-auto p-4">
      <h2 className="mb-6 text-center text-[42px] font-bold">Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            src="https://www.vinsolutions.com/wp-content/uploads/sites/2/vinsolutions/media/Vin-Images/news-blog/Empty_Shopping_Cart_blog.jpg"
            alt="Empty cart"
            className="h-auto max-w-full"
          />
          <Link
            to="/product-shop/products"
            className="rounded-lg border border-amber-500 px-4 py-2 transition hover:scale-[1.05] hover:bg-gray-500"
          >
            Choose something
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-[3fr_1fr] gap-4">
          <ul className="grid grid-cols-2 gap-4">
            {cart.map((item) => (
              <li
                key={item.id}
                className="card bg-base-100 image-full w-80 shadow-sm"
              >
                <figure>
                  <img src={item.thumbnail} alt={item.description} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{item.title}</h2>
                  <p>{item.description}</p>
                  <p className="text-lg text-amber-400">Price: {item.price}</p>
                  <div className="card-actions justify-between">
                    <Link
                      to={`/product-shop/products/${item.id}`}
                      className="btn btn-soft"
                    >
                      Details
                    </Link>
                    <button
                      className="btn btn-square hover:bg-red-950"
                      onClick={() => dispatch(removeCartItem(item.id))}
                    >
                      <RiDeleteBinLine size={20} color="red" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="px-6">
            <h2 className="mb-6 text-center text-4xl">Total</h2>
            <p className="text-xl text-amber-400">
              Quantiti: {cart.length} elements
            </p>
            <p className="mb-10 text-xl text-amber-400">
              Total price: {total || 0}$
            </p>
            <div className="flex flex-col gap-4">
              <button className="btn btn-wide border-amber-500 text-amber-500 hover:bg-red-950">
                Buy NOW
              </button>
              <button
                className="btn btn-wide flex items-center justify-center gap-2 border-red-500 text-red-600 hover:bg-red-950"
                onClick={handleClear}
              >
                Clear Cart
                <RiDeleteBinLine size={30} color="red" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
