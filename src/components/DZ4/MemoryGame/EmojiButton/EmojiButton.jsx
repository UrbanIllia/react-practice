import { decodeEntity } from "html-entities";
import css from "./EmojiButton.module.css";

const EmojiButton = ({ emoji }) => {
  return <button className={css.btn}>{decodeEntity(emoji.htmlCode[0])}</button>;
};

export default EmojiButton;
