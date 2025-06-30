import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const MY_KEY = "GK8BrIlJ2QfIUPX5TpEBpM4UFGlfVawsaV1YDPfYgb0";

const fetchImages = async (query, page) => {
  const response = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      query,
      page,
      per_page: 9,
      client_id: MY_KEY,
    },
  });
  return response.data;
};
export default fetchImages;
