import css from "./RockItem.module.css";
const RockItem = ({
  item: {
    name,
    years_active,
    country,
    genre,
    official_albums_count,
    photo_url,
    description,
  },
}) => {
  return (
    <div>
      <img src={photo_url} alt={name} />
      <h2>{name}</h2>
      <p>{country}</p>
      <p>{years_active}</p>
      <p>{genre}</p>
      <p>{official_albums_count}</p>
      <p>{description}</p>
    </div>
  );
};

export default RockItem;
