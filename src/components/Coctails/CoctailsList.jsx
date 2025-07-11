import { Link, useLocation } from 'react-router-dom';

const CoctailsList = ({
  item: { idDrink, strDrink, strGlass, strDrinkThumb },
}) => {
  const location = useLocation();
  return (
    <li
      key={idDrink}
      className="transform rounded-lg bg-gray-900/90 p-6 shadow-md transition-all duration-200 hover:scale-105 hover:shadow-lg"
    >
      <Link to={`/coctailshome/coctails/${idDrink}`} state={location}>
        <img
          src={strDrinkThumb}
          alt={strDrink}
          className="mb-4 h-64 w-full rounded-md object-cover"
        />
        <div className="text-center">
          <p className="mb-2 text-2xl font-semibold text-white">{strDrink}</p>
          <p className="text-base text-gray-400">{strGlass}</p>
        </div>
      </Link>
    </li>
  );
};

export default CoctailsList;
