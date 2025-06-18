import Section from "../../Section/Section.jsx";
import Container from "../../Container/Container.jsx";
import Form from "../../Form/Form.jsx";
import { useEffect, useState } from "react";
import { getPhotos } from "../../../Services/pexelsAPI.js";
import ImagesList from "./ImagesList/ImagesList.jsx";
import Heading from "../../Heading/Heading.jsx";
import Loader from "../Articles2/Loader.jsx";
import LoadMore from "./LoadMore/LoadMore.jsx";
import { BsSignDoNotEnterFill } from "react-icons/bs";
import ModalImage from "./ModalImage/ModalImage.jsx";
const Photos = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [isEmpty, seIsEmpty] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  useEffect(() => {
    if (!query.trim()) return;
    const fetchData = async () => {
      try {
        setLoader(true);
        const { photos, per_page, total_results } = await getPhotos(
          query,
          page
        );
        if (!total_results) {
          seIsEmpty(true);
        }
        setImages((prevImages) => [...prevImages, ...photos]);
        setLoadMore(page < Math.ceil(total_results / per_page));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    };
    fetchData();
  }, [query, page]);

  const handleSubmit = (query) => {
    setImages([]);
    setQuery(query);
    setPage(1);
    setError("");
    setLoadMore(false);
    seIsEmpty(false);
  };
  const handleClick = () => {
    setPage(page + 1);
  };

  const openModal = (image) => {
    setModalImage(image);
  };
  return (
    <Section>
      <Container>
        <div className="mx-10 my-auto bg-blue-100 p-8 flex flex-col gap-5">
          <Heading text="Photos" />
          <Form onSubmit={handleSubmit} />
          {loader && <Loader />}
          {error && (
            <Heading
              text={`Somethig going wrong... ${error} `}
              mTop
              variant="error"
            />
          )}
          {images.length > 0 && (
            <ImagesList images={images} openModal={openModal} />
          )}
          {loadMore && <LoadMore handleClick={handleClick} />}
          {isEmpty && (
            <Heading
              variant="info"
              text={`We dont have any    ${query}   data`}
            />
          )}
          {isEmpty && (
            <div className="flex justify-center text-red-700">
              <BsSignDoNotEnterFill size={100} />
            </div>
          )}
          {modalImage && (
            <ModalImage
              image={modalImage}
              modalIsOpen={Boolean(modalImage)}
              closeModal={() => openModal(null)}
            />
          )}
        </div>
      </Container>
    </Section>
  );
};

export default Photos;
