import { useEffect, useState } from 'react';
import { getRecipebyQuery, getRecipes } from './APIRecipes';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import SearchBar from './SearchBar';

const FoodApp = () => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  console.log(query);
  useEffect(() => {
    const getData = async () => {
      try {
        const { recipes } = query
          ? await getRecipebyQuery(query)
          : await getRecipes();
        setRecipes((prev) => [...prev, ...recipes]);
      } catch (error) {
        console.log('Error fetching recipes:', error);
      }
    };
    getData();
  }, [query]);

  const handleChangeQuery = (newQuery) => {
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
    setRecipes([]);
  };

  return (
    <div
      className="min-h-screen bg-gray-300/20 p-6"
      style={{
        backgroundImage: `url('/images/food-3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <h2 className="mb-6 rounded-xl bg-gray-800/80 text-center text-4xl text-white">
        Recipes:
      </h2>
      <SearchBar handleChangeQuery={handleChangeQuery} />
      {recipes.length > 0 ? (
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {recipes.map((item) => (
            <Link state={location} to={`/recipeshome/recipes/${item.id}`}>
              <li
                key={item.id}
                className="cursor-pointer rounded-lg bg-gray-800/80 p-4 text-white shadow-md transition hover:scale-[1.08]"
              >
                <img
                  src={item.image}
                  alt={item.name || 'Recipe image'}
                  className="h-48 w-full rounded-t-lg object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">{item.name}</h3>
                  <p className="text-sm text-gray-300">
                    Cuisine: {item.cuisine}
                  </p>
                  <p className="text-sm text-gray-300">
                    Difficulty: {item.difficulty}
                  </p>
                  <p className="text-sm text-yellow-400">
                    Rating: {item.rating}
                    {item.rating >= 4.0
                      ? Array.from(
                          {
                            length: Math.min(
                              Math.floor((item.rating - 4.0) / 0.2) + 1,
                              5,
                            ),
                          },
                          (_, i) => '★',
                        ).join('')
                      : ''}
                  </p>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      ) : (
        <p className="text-center text-white">No recipes available.</p>
      )}
    </div>
  );
};

export default FoodApp;
