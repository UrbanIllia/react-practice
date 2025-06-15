import css from "./Photos.module.css";
import Section from "../../Section/Section.jsx";
import Container from "../../Container/Container.jsx";
import Form from "../../Form/Form.jsx";
import { useEffect, useState } from "react";
import { getPhotos } from "../../../Services/pexelsAPI.js";
import ImagesList from "./ImagesList/ImagesList.jsx";
import Heading from "../../Heading/Heading.jsx";
import Loader from "../Articles2/Loader.jsx";
const Photos = () => {
  const [images, setImages] = useState([]);
  const [loader, setLoader] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (!query.trim()) return;
    const fetchData = async () => {
      try {
        setLoader(true);
        const { photos } = await getPhotos(query, page);
        setImages((prevImages) => [...prevImages, ...photos]);
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
  };
  return (
    <Section>
      <Container>
        <div className={css.mainWrap}>
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
          {images.length > 0 && <ImagesList images={images} />}
        </div>
      </Container>
    </Section>
  );
};

export default Photos;
