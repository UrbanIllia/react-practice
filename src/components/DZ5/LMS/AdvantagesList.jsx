import { Link } from 'react-router-dom';

const ProductList = ({ advantages }) => {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-5">
        {advantages.map((item) => (
          <Link to={`${item.id}`}>
            <li
              key={item.id}
              className="flex items-center justify-center rounded-2xl border-1 border-white px-3 py-3 transition hover:scale-[1.03] hover:bg-gray-800"
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
