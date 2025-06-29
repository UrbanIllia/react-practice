import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { fetchImages } from "../apiUnsplash";
import ArticlesList from "../ArticlesList/ArticlesList";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import Loader from "../Loader/Loader";
import ImageModal from "../ImageModal/ImageModal";

const DZApp = () => {
  const [query, setQuery] = useState("");
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSearch = async (newQuery) => {
    setArticles([]);
    setQuery(newQuery);
    setError(null);
    setLoader(true);
    setPage(1);
    try {
      const response = await fetchImages(newQuery);
      setArticles(response.results);
      if (response.results.length === 0) {
        prompt(response.results);
      }
    } catch (error) {
      setError("Короче фігня якась");
    } finally {
      setLoader(false);
    }
  };

  const handleChangePage = async () => {
    const newPage = page + 1;
    setPage(newPage);
    setLoader(true);
    try {
      const response = await fetchImages(query, newPage);
      setArticles((prev) => [...prev, ...response.results]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="my-8 mx-10 bg-emerald-200 pb-6 flex flex-col justify-center items-center">
      <h2 className="text-5xl text-center font-black text-lime-800">
        Search Pictures
      </h2>
      <SearchBar onSubmit={handleSearch} />
      {loader && <Loader />}
      {error && <ErrorMessage message={error} />}
      {articles.length > 0 && (
        <ArticlesList articles={articles} onImageClick={openModal} />
      )}
      {articles.length > 0 && (
        <button
          type="button"
          className="bg-amber-900 text-amber-300 p-5 rounded-3xl cursor-pointer
           hover:bg-amber-200 hover:text-amber-900 transition mx-auto w-70 block"
          onClick={handleChangePage}
        >
          Add More
        </button>
      )}
      <ImageModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        image={selectedImage}
      />
    </div>
  );
};

export default DZApp;
