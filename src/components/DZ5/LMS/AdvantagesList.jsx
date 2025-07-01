import { Link } from "react-router-dom";

const ProductList = ({ advantages }) => {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-5">
        {advantages.map((item) => (
          <Link to={`/products/${item.id}`}>
            <li
              key={item.id}
              className="px-3 py-3 border-1 border-white rounded-2xl 
              flex justify-center items-center hover:bg-gray-800 transition hover:scale-[1.03]"
            >
              <h3 className="text-white">{item.name}</h3>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
