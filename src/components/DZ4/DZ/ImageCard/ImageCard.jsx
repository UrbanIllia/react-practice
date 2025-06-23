const ImageCard = ({ item }) => {
  return (
    <>
      <img
        src={item.urls.small}
        alt=""
        className="rounded-2xl w-full h-full object-cover block"
      />
    </>
  );
};

export default ImageCard;
