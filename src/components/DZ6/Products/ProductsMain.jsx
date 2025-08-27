import { Link, NavLink, Outlet } from 'react-router-dom';
import Container from '../../Container/Container';
import { PiMaskHappy } from 'react-icons/pi';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

const link =
  'text-[20px] text-[black] border-b-1 relative border-black border-t-1 transition hover:bg-[#59596c] hover:text-[#a9a9a9] hover:scale-[1.10]';
const active = 'shadow-md shadow-gray-700';

const ProductsMain = () => {
  const cart = useSelector((state) => state.cart.cartItems);

  const setActive = ({ isActive }) => clsx(`${link} ${isActive && active}`);

  return (
    <Container>
      <section className="relative flex flex-row items-center justify-center">
        <header className="absolute top-22 left-[6px] flex h-[500px] flex-col items-center justify-between rounded-lg bg-gradient-to-b from-gray-900 to-yellow-200 py-[30px]">
          <Link href="/product-shop">
            <PiMaskHappy size={80} />
          </Link>
          <nav className="flex w-[100px] flex-col gap-4 text-center">
            <NavLink to="/product-shop" className={setActive} end>
              Home
            </NavLink>
            <NavLink to="products" className={setActive}>
              Products
            </NavLink>
            <NavLink to="favourites" className={setActive}>
              Favourites
            </NavLink>
            <NavLink to="cart" className={setActive}>
              Cart
              <div className="badge badge-primary badge-md absolute right-[50%] bottom-[-30px] translate-x-[50%] border border-gray-600 bg-gray-600">
                {cart.length}
              </div>
            </NavLink>
          </nav>
        </header>
        <header className="absolute top-22 right-[6px] flex h-[500px] flex-col items-center justify-between rounded-lg bg-gradient-to-b from-gray-900 to-yellow-200 py-[30px]">
          <Link href="/product-shop">
            <PiMaskHappy size={80} />
          </Link>
          <nav className="flex w-[100px] flex-col gap-4 text-center">
            <NavLink to="/product-shop" className={setActive} end>
              Home
            </NavLink>
            <NavLink to="products" className={setActive}>
              Products
            </NavLink>
            <NavLink to="favourites" className={setActive}>
              Favourites
            </NavLink>
            <NavLink to="cart" className={setActive}>
              Cart
              <div className="badge badge-primary badge-md absolute right-[50%] bottom-[-30px] translate-x-[50%] border border-gray-600 bg-gray-600">
                {cart.length}
              </div>
            </NavLink>
          </nav>
        </header>
        <div className="bg-gray-800 px-[112px] py-4">
          <Outlet />
        </div>
      </section>
    </Container>
  );
};

export default ProductsMain;
