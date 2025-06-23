import { useState } from "react";
import Container from "../../../Container/Container";
import SearchBar from "../SearchBar/SearchBar";

import { fetchImages } from "../Api/unsplash";
import ImageGallery from "../ImageGallery/ImageGallery";

const DZApp = () => {
  const [articles, setArticles] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetchImages(query);
      console.log(response.results);
      setArticles(response.results);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container>
      <div className="my-8 mx-10 bg-emerald-200">
        <h2 className="text-5xl text-center font-black text-lime-800">
          Search Pictures
        </h2>
        <SearchBar onSubmit={handleSearch} />
        {articles.length > 0 && <ImageGallery articles={articles} />}
      </div>
    </Container>
  );
};

export default DZApp;
