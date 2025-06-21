import EmojiButton from "../EmojiButton/EmojiButton";
import css from "./MemoryCard.module.css";

const MemoryCard = ({ data }) => {
  return (
    <ul className={css.cardList}>
      {data.map((emoji, index) => {
        return (
          <li key={index}>
            <EmojiButton emoji={emoji} />
          </li>
        );
      })}
    </ul>
  );
};

export default MemoryCard;
