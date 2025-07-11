import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getRecipesByCategory } from './APIRecipes';

const Category = () => {
  const { categoryId } = useParams();
  const [recipes, setRecipes] = useState(null);
  console.log('Category ID:', categoryId);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getRecipesByCategory(categoryId);
        setRecipes(response.recipes);
      } catch (error) {
        console.log('Error fetching recipes:', error);
      }
    };
    getData();
  }, [categoryId]);

  if (!recipes) return <p className="text-center text-white">Loading...</p>;

  return (
    <div className="min-h-screen p-6 text-white">
      <h2 className="mb-6 text-center text-2xl font-bold">
        Recipes in {categoryId}
      </h2>
      <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {recipes.map((item) => (
          <li
            key={item.id}
            className="rounded-lg bg-gray-800/80 p-4 shadow-md transition hover:shadow-lg"
          >
            <Link to={`/recipeshome/home/recipes/${item.id}`} className="block">
              <img
                src={item.image}
                alt={item.name || 'Recipe image'}
                className="h-48 w-full rounded-t-lg object-cover"
              />
              <p className="mt-2 text-center text-lg font-semibold">
                {item.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
