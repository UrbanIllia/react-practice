import axios from "axios";

const BASE_URL = "https://dummyjson.com";

const fetchArticles = (skip) => {
  const response = axios.get(`${BASE_URL}/users`, {
    params: {
      limit: 30,
      skip,
    },
  });
  return response;
};
export default fetchArticles;
