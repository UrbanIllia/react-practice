import css from "./ImageItem.module.css";

const ImageItem = ({ item }) => {
  return (
    <div
      className={css.thumb}
      style={{ backgroundColor: item.avg_color, borderColor: item.avg_color }}
    >
      <img
        src={item.src.small}
        alt={item.alt}
        onClick={() => openModal({ src: item.src.large, alt: item.alt })}
      />
    </div>
  );
};

export default ImageItem;
