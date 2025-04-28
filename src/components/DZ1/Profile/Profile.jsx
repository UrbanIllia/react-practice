import css from "./Profile.module.css";
const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.wrapper}>
      <div className={css.card}>
        <img className={css.img} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.address}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.item}>
          <span className={css.text}>Followers</span>
          <span className={css.num}>{followers}</span>
        </li>
        <li className={css.item}>
          <span className={css.text}>Views</span>
          <span className={css.num}>{views}</span>
        </li>
        <li className={css.item}>
          <span className={css.text}>Likes</span>
          <span className={css.num}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
