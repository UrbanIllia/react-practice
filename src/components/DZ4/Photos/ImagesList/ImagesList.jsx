import css from "./ImagesList.module.css";
import GridComponent from "../../../GridComponent/GridComponent.jsx";
import GridItem from "../../../GridItem/GridItem.jsx";
import ImageItem from "./ImageItem.jsx";

const ImagesList = ({ images, openModal }) => {
  return (
    <GridComponent className="mb-10">
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
