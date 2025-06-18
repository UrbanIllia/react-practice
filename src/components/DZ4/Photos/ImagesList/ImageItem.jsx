import css from "./ImageItem.module.css";

const ImageItem = ({ item, openModal }) => {
  return (
    <div
      className={`${css.thumb} cursor-pointer`}
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
