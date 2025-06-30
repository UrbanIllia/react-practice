import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import fetchImages from "../fetchUnsplash";
import ArticlesList from "../ArticlesList/ArticlesList";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ModalImage from "../ModalImage/ModalImage";

const DZApp = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [currentImage, setCurrentImage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchImages = async (newQuery) => {
    setArticles([]);
    setLoader(true);
    setError(null);
    setQuery(newQuery);
    try {
      const response = await fetchImages(newQuery);
      setArticles(response.results);
    } catch (error) {
      setError("Фігня якась....");
    } finally {
      setLoader(false);
    }
  };

  const handleChangePage = async () => {
    const newPage = page + 1;
    setPage(newPage);
    setLoader(true);
    // setError(null);
    try {
      const response = await fetchImages(query, newPage);
      setArticles((prev) => [...prev, ...response.results]);
    } catch (error) {
      setError("Фігня якась....");
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
    <div className="my-8 mx-10 bg-emerald-200 flex flex-col justify-stretch items-center pb-5">
      <h2 className="text-5xl text-center font-black text-lime-800">
        Search Pictures
      </h2>
      <SearchBar onChangeQuery={handleSearchImages} />
      {articles.length > 0 && (
        <ArticlesList articles={articles} openImage={openModal} />
      )}
      {error && <ErrorMessage text={error} />}
      {loader && <Loader />}
      {articles.length > 0 && (
        <button
          onClick={handleChangePage}
          type="button"
          className="px-6 py-4 w-[200px] bg-green-300 text-green-800
           hover:bg-green-800 hover:text-green-300 transition rounded-[50%] cursor-pointer border-2 my-4"
        >
          Load More
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
