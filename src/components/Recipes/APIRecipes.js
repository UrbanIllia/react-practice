import axios from 'axios';

export const getRecipes = async () => {
  const response = await axios.get('https://dummyjson.com/recipes', {
    params: {},
  });
  return response.data;
};

export const getRecipebyId = async (id) => {
  const response = await axios.get(`https://dummyjson.com/recipes/${id}`);
  return response.data;
};
export const getRecipebyQuery = async (query) => {
  const response = await axios.get(
    `https://dummyjson.com/recipes/search?q=${query}`,
  );
  return response.data;
};
export const getRecipesByCategory = async (category) => {
  const response = await axios.get(
    `https://dummyjson.com/recipes/tag/${category}`,
  );
  return response.data;
};
