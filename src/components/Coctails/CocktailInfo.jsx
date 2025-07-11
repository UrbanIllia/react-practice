import React, { useState } from 'react';
import { BackLink } from './BackLink';

const CocktailInfo = ({
  strDrink,
  strDrinkThumb,
  strAlcoholic,
  strCategory,
  strInstructions,
  strGlass,
  dateModified,
  ingredients,
  backLinkHref,
}) => {
  const [isIngredientsVisible, setIsIngredientsVisible] = useState(false);

  const toggleIngredients = () => {
    setIsIngredientsVisible(!isIngredientsVisible);
  };

  return (
    <div
      className="flex items-center justify-center py-10"
      style={{
        backgroundImage: `url('/images/123.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container">
        <div className="rounded-lg bg-gray-800/90 p-6 text-white shadow-xl md:p-8">
          <div className="relative flex flex-col items-center gap-6 md:flex-row md:gap-12">
            <img
              src={strDrinkThumb}
              alt={strDrink}
              className="h-auto w-full rounded-md object-cover md:w-2/5"
            />
            <div className="flex-1">
              <h2 className="mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
                {strDrink}
              </h2>
              <div className="mb-6 space-y-3">
                <p className="text-lg sm:text-xl md:text-2xl">
                  <strong>Type: </strong>
                  <span className="text-amber-400">{strAlcoholic}</span>
                </p>
                <p className="text-lg sm:text-xl md:text-2xl">
                  <strong>Category:</strong>{' '}
                  <span className="text-amber-400">{strCategory}</span>
                </p>
              </div>
              <div className="mb-6">
                <strong className="mb-2 block text-lg sm:text-xl md:text-2xl">
                  Instruction:
                </strong>
                <p className="text-base text-gray-300 sm:text-lg md:text-xl">
                  {strInstructions}
                </p>
              </div>
              <div className="mb-6">
                <button
                  onClick={toggleIngredients}
                  className="cursor-pointer rounded-lg bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 px-4 py-2 text-lg text-black transition hover:from-amber-300 hover:via-amber-500 hover:to-amber-600 sm:text-xl md:text-2xl"
                >
                  {isIngredientsVisible ? 'Close' : 'Open'} Ingredients
                </button>
                {ingredients &&
                  ingredients.length > 0 &&
                  isIngredientsVisible && (
                    <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                      {ingredients.map((ing, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-lg transition-all duration-300 hover:scale-130 sm:text-xl md:text-2xl"
                        >
                          <img
                            src={ing.imgUrl}
                            alt={`${ing.ingredient} image`}
                            className="h-20 w-20 rounded-full object-cover sm:h-24 sm:w-24 md:h-28 md:w-28"
                            onError={(e) => {
                              e.target.src = 'https://via.placeholder.com/64';
                            }}
                          />
                          <span>
                            {ing.ingredient}:<br />{' '}
                            <span className="text-amber-400">
                              {ing.measure}
                            </span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                {!isIngredientsVisible &&
                  ingredients &&
                  ingredients.length > 0 && (
                    <p className="mt-2 text-base text-gray-400 sm:text-lg md:text-xl">
                      Click to view ingredients.
                    </p>
                  )}
                {(!ingredients || ingredients.length === 0) && (
                  <p className="text-base text-gray-400 sm:text-lg md:text-xl">
                    No ingredients available.
                  </p>
                )}
              </div>
              <div className="space-y-3">
                <p className="text-lg sm:text-xl md:text-2xl">
                  <strong>Glass:</strong>{' '}
                  <span className="text-amber-400">{strGlass}</span>
                </p>
                <p className="text-lg sm:text-xl md:text-2xl">
                  <strong>Published:</strong>{' '}
                  <span className="text-base text-gray-400 sm:text-lg">
                    {dateModified || 'No date'}
                  </span>
                </p>
                <BackLink to={backLinkHref}>Back</BackLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CocktailInfo;
