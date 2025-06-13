import css from "./Photos.module.css";
import Section from "../../Section/Section.jsx";
import Container from "../../Container/Container.jsx";
import Form from "../../Form/Form.jsx";
import { useEffect, useState } from "react";
import { getPhotos } from "../../../Services/pexelsAPI.js";
import ImagesList from "./ImagesList/ImagesList.jsx";
const Photos = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  useEffect(() => {
    if (!query.trim()) return;
    const fetchData = async () => {
      try {
        const { photos } = await getPhotos(query, page);
        setImages((prevImages) => [...prevImages, ...photos]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [query, page]);
  const handleSubmit = (query) => {
    setQuery(query);
  };
  return (
    <Section>
      <Container>
        <div className={css.mainWrap}>
          <h2 className={css.title}>Photos</h2>
          <Form onSubmit={handleSubmit} />
          {images.length > 0 && <ImagesList images={images} />}
        </div>
      </Container>
    </Section>
  );
};

export default Photos;
