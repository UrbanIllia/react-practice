import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import fetchImages from "../apiUnsplash.js";
import ArticlesList from "../ArticlesList/ArticlesList.jsx";
import ErrorMessage from "../ErrorMessage/ErrorMessage.jsx";
import Loader from "../Loader/Loader.jsx";
import ModalImage from "../ModalImage/ModalImage.jsx";

const DZApp = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [currentImage, setCurrentImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = async (newQuery) => {
    setArticles([]);
    setQuery(newQuery);
    setError(null);
    setLoader(true);

    try {
      const response = await fetchImages(newQuery);
      setArticles(response.results);
      console.log(response.results);
    } catch (error) {
      setError("Якась херня");
    } finally {
      setLoader(false);
    }
  };

  const handleAddArticles = async () => {
    const newPage = page + 1;
    setPage(newPage);
    try {
      setLoader(true);
      setError(null);
      const response = await fetchImages(query, newPage);
      setArticles((prev) => [...prev, ...response.results]);
    } catch (error) {
      setError("Якась херня");
    } finally {
      setLoader(false);
    }
  };

  const openModal = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="my-8 mx-10 bg-emerald-200 py-7 flex flex-col justify-center items-center">
      <h2 className="text-5xl text-center font-black text-lime-800">
        Пошук файних картинок
      </h2>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {loader && <Loader />}
      {articles.length > 0 && (
        <ArticlesList articles={articles} onImageClick={openModal} />
      )}
      {articles.length > 0 && (
        <button
          type="button"
          onClick={handleAddArticles}
          className="px-10 py-2 bg-indigo-900 text-indigo-200 rounded-2xl
           hover:bg-indigo-300 hover:text-indigo-800 transition cursor-pointer "
        >
          Ще трохи...
        </button>
      )}
      <ModalImage
        isOpen={isOpen}
        onRequestClose={closeModal}
        image={currentImage}
      />
    </div>
  );
};

export default DZApp;
