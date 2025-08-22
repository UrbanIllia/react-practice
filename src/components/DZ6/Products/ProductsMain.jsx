import { NavLink, Outlet } from 'react-router-dom';

const ProductsMain = () => {
  return (
    <section>
      <Container>
        <header>
          <NavLink to="/product-shop">Home</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="favourites">Favourites</NavLink>
          <NavLink to="cart">Cart</NavLink>
        </header>
        <Outlet />
      </Container>
    </section>
  );
};

export default ProductsMain;
