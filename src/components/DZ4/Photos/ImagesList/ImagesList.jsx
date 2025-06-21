import { useEffect, useRef } from "react";
import GridComponent from "../../../GridComponent/GridComponent.jsx";
import GridItem from "../../../GridItem/GridItem.jsx";
import ImageItem from "./ImageItem.jsx";

const ImagesList = ({ images, openModal }) => {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (galleryRef.current) {
      const lastItem = galleryRef.current.lastElementChild;
      const height = lastItem.getBoundingClientRect().height;
      window.scrollBy({
        top: height * 3,
        behavior: "smooth",
      });
    }
  }, [images]);
  return (
    <GridComponent className="mb-10" ref={galleryRef}>
      {images.map((item) => {
        return (
          <GridItem key={item.id}>
            <ImageItem item={item} openModal={openModal} />
          </GridItem>
        );
      })}
    </GridComponent>
  );
};

export default ImagesList;
