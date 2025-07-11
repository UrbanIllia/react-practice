import axios from "axios";
const BASE_URL = "https://dummyjson.com";

export const getUserById = async (id) => {
  const response = await axios.get(`${BASE_URL}/users/${id}`);
  return response;
};

export const getPostsById = async (id) => {
  const response = await axios.get(`${BASE_URL}/posts/user/${id}`);
  return response.data.posts;
};
