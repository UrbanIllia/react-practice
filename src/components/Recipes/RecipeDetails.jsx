import React, { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { getRecipebyId } from './APIRecipes.js';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const { recipeId } = useParams();
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/recipes');

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getRecipebyId(recipeId);
        setRecipe(response);
        console.log(response);
      } catch (error) {
        console.log('Error fetching recipe:', error);
      }
    };
    getData();
  }, [recipeId]);

  if (!recipe) return <p className="text-center text-white">Loading...</p>;

  return (
    <div
      style={{
        backgroundImage: `url('/images/food-3.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex items-center justify-center pt-4 pb-4"
    >
      <div className="min-h-screen w-[90%] rounded-xl bg-gray-900/80 p-6 text-white">
        <h1 className="mb-6 text-center text-4xl font-bold">{recipe.name}</h1>
        <img
          src={recipe.image}
          alt={recipe.name || 'Recipe image'}
          className="mx-auto mb-6 h-96 w-[80%] rounded-lg object-cover shadow-lg"
        />
        <div className="mx-auto flex max-w-4xl flex-col">
          <div className="flex flex-row gap-[140px]">
            <div>
              <p className="mb-2 text-lg">
                <strong>Cuisine: </strong>
                <span className="text-yellow-400">{recipe.cuisine}</span>
              </p>
              <p className="mb-2 text-lg">
                <strong>Difficulty: </strong>
                <span className="text-yellow-400">{recipe.difficulty}</span>
              </p>
              <p className="mb-2 text-lg">
                <strong>Meal Type: </strong>{' '}
                <span className="text-yellow-400">
                  {recipe.mealType?.join(', ') || 'N/A'}
                </span>
              </p>
              <p className="mb-2 text-lg">
                <strong>Prep Time: </strong>
                <span className="text-yellow-400">
                  {recipe.prepTimeMinutes} minutes{' '}
                </span>
              </p>
              <p className="mb-2 text-lg">
                <strong>Cook Time: </strong>
                <span className="text-yellow-400">
                  {recipe.cookTimeMinutes} minutes{' '}
                </span>
              </p>
              <p className="mb-2 text-lg">
                <strong>Calories per Serving: </strong>{' '}
                <span className="text-yellow-400">
                  {recipe.caloriesPerServing}{' '}
                </span>
              </p>
            </div>
            <div>
              <p className="mb-2 text-lg text-yellow-400">
                <strong>Rating:</strong> {recipe.rating}{' '}
                {recipe.rating >= 4.0
                  ? Array.from(
                      {
                        length: Math.min(
                          Math.floor((recipe.rating - 4.0) / 0.2) + 1,
                          5,
                        ),
                      },
                      (_, i) => '★',
                    ).join('')
                  : ''}
              </p>
            </div>
            <div>
              <h2 className="mb-2 text-2xl font-semibold">Ingredients:</h2>
              <ul className="mb-4 list-disc pl-6">
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index} className="text-lg">
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <hr />
          <nav className="flex flex-row items-center justify-center">
            <NavLink
              to="instruction"
              className="mt-3 mb-3 flex w-[180px] items-center justify-center self-center rounded-2xl border-1 border-white px-4 py-2 transition hover:bg-gray-700"
            >
              Instruction
            </NavLink>

            <h3 className="ml-10 text-2xl">Tags:</h3>
            {recipe.tags.map((item) => (
              <NavLink
                key={item}
                to={`category/${item}`}
                className="mt-3 mb-3 ml-3 flex items-center justify-center self-center rounded-2xl border-1 border-white px-4 py-1 transition hover:bg-gray-700"
              >
                {item}
              </NavLink>
            ))}
            {/* </div> */}
          </nav>
          <Outlet context={recipe} />
          <Link
            to={goBackRef.current}
            className="mb-3 flex w-[60px] cursor-pointer items-center justify-center self-center rounded-3xl border border-white transition hover:bg-gray-700"
          >
            <TiArrowBackOutline size={60} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
