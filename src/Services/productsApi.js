import axios from 'axios';

export const getAllProducts = async () => {
  const response = await axios.get('https://dummyjson.com/products');
  return response.data;
};
export const getProductById = async (id) => {
  const response = await axios.get(`https://dummyjson.com/products/${id}`);
  return response.data;
};
