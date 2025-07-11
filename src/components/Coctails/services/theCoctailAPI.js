import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://www.thecocktaildb.com/api/json/v1/1',
});

const urls = Array.from({ length: 12 }, () => '/random.php');

export const getCoctail = async ({ signal }) => {
  const promises = urls.map(async (url) => {
    const { data } = await instance.get(url, { signal });
    return data;
  });
  const data = await Promise.all(promises);
  return data.map(({ drinks }) => {
    const { idDrink, strDrink, strDrinkThumb, strGlass } = drinks[0];
    return { idDrink, strDrink, strDrinkThumb, strGlass };
  });
};

export const getCocktailDetails = async (cocktailID) => {
  const { data } = await instance.get(`/lookup.php?i=${cocktailID}`);
  console.log(data);
  const drink = data.drinks[0];

  const ingredients = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeasure${i}`];
    if (ingredient) {
      const encodedIngredient = encodeURIComponent(ingredient.trim());
      const imgUrl = `https://www.thecocktaildb.com/images/ingredients/${encodedIngredient}-medium.png`;
      ingredients.push({ ingredient, measure: measure || 'to taste', imgUrl });
    }
  }

  const {
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strInstructions,
    strGlass,
    dateModified,
  } = drink;

  return {
    strDrink,
    strDrinkThumb,
    strAlcoholic,
    strCategory,
    strInstructions,
    strGlass,
    dateModified,
    ingredients,
  };
};

// export const getCocktailDetails = async (cocktailID) => {
//   const data = await instance.get(`/lookup.php?i=${cocktailID}
// `);
//   console.log(data);
//   return data.drinks[0];
// };
export const getCocktailsByQuery = async (query, { signal } = {}) => {
  try {
    const { data } = await instance.get(`search.php?s=${query}`, { signal });
    console.log('API Response:', data); // Додано для діагностики
    if (!data.drinks || !Array.isArray(data.drinks)) {
      return [];
    }
    return data.drinks.map(
      ({
        idDrink,
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strCategory,
        strInstructions,
        strGlass,
        dateModified,
      }) => ({
        idDrink,
        strDrink,
        strDrinkThumb,
        strAlcoholic,
        strCategory,
        strInstructions,
        strGlass,
        dateModified,
      }),
    );
  } catch (error) {
    console.error('Error in getCocktailsByQuery:', error);
    return [];
  }
};
