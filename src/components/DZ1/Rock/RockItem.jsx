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
    <div className={css.card}>
      <img src={photo_url} alt={name} />
      <h2>{name}</h2>
      <p>{country}</p>
      <p>{years_active}</p>
      <p>{genre}</p>
      <p>
        Albums: <span className="text-amber-200">{official_albums_count}</span>
      </p>
      <p>{description}</p>
    </div>
  );
};

export default RockItem;
