import axios from "axios";
const API_KEY = "GK8BrIlJ2QfIUPX5TpEBpM4UFGlfVawsaV1YDPfYgb0";
const BASE_URL = "https://api.unsplash.com";

export const fetchImages = async (query) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      //   page,
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data;
};
