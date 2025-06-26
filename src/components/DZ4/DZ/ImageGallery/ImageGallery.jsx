import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ articles, onImageClick }) => {
  return (
    <ul className="p-4 grid grid-cols-3 gap-4 list-none justify-between">
      {articles.map((item) => (
        <li
          key={item.id}
          className="inline-block  min-w-[200px] max-w-[400px]
           bg-gray-200 p-2 cursor-pointer rounded-2xl h-[200px] overflow-hidden shadow-md"
          style={{ background: item.color || "#D3D3D3" }}
        >
          <ImageCard item={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
