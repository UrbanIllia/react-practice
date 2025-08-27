import { useEffect } from 'react';
import { getAllProducts } from '../../../Services/productsApi';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../../../redux/productsSlice';
import ProductItem from './ProductItem';

const Products = () => {
  const products = useSelector((state) => state.products.products);
  console.log(products);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllProducts();
      dispatch(setProducts(data.products));
    };
    fetchData();
  }, [dispatch]);

  return (
    <section className="w-full">
      <h2 className="mb-6 text-center text-[42px] font-bold">Products</h2>
      <ul className="grid grid-cols-1 items-center justify-center gap-5 md:grid-cols-2">
        {products.map((item) => (
          <ProductItem item={item} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
