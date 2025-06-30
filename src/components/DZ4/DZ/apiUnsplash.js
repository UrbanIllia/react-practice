import axios from "axios";
const BASE_URL = "https://api.unsplash.com";
const KEY = "GK8BrIlJ2QfIUPX5TpEBpM4UFGlfVawsaV1YDPfYgb0";

const fetchImages = async (query, page) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      page,
      query,
      per_page: 9,
      client_id: KEY,
    },
  });
  return response.data;
};

export default fetchImages;
