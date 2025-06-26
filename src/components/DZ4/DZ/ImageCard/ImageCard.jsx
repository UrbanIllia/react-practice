const ImageCard = ({ item, onClick }) => {
  return (
    <>
      <img
        onClick={onClick}
        src={item.urls.small}
        alt={item.alt_description || "Image"}
        className="rounded-2xl w-full h-full object-cover block cursor-pointer"
      />
    </>
  );
};

export default ImageCard;
