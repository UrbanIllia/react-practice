import css from "./ImagesList.module.css";
import GridComponent from "../../../GridComponent/GridComponent.jsx";
import GridItem from "../../../GridItem/GridItem.jsx";
import ImageItem from "./ImageItem.jsx";

const ImagesList = ({ images }) => {
  return (
    <GridComponent>
      {images.map((item) => {
        return (
          <GridItem key={item.id}>
            <ImageItem item={item} />
          </GridItem>
        );
      })}
    </GridComponent>
  );
};

export default ImagesList;
