import css from "./ImagesList.module.css";
import GridComponent from "../../../GridComponent/GridComponent.jsx";
import GridItem from "../../../GridItem/GridItem.jsx";

const ImagesList = ({ images }) => {
  return (
    <GridComponent>
      {images.map((item) => {
        return (
          <GridItem>
            <img src={item.src.small} alt={item.alt} />
          </GridItem>
        );
      })}
    </GridComponent>
  );
};

export default ImagesList;
