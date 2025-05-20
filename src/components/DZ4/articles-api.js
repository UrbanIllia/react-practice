import axios from "axios";

axios.defaults.baseURL = "https://hn.algolia.com/api/v1";

export const fetchArticlesWithTopic = async (topic) => {
  const response = await axios.get(`/search?query=${topic}`);
  return response.data.hits;
};

export const fetchProducts = async ({ signal, skip }) => {
  const response = await axios.get(
    `https://dummyjson.com/products?skip=${skip}`,
    {
      signal,
    }
  );
  return response.data;
};
export const fetchSearchProduct = async ({ query }) => {
  const response = await axios.get(
    `https://dummyjson.com/products/search/?q=${query}`
  );
  return response.data;
};
