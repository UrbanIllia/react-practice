import { useState } from "react";
import MemoryForm from "./MemoryForm/MemoryForm";
import Text from "./Text/Text";
import { fetchEmoji } from "../../../Services/emojihubAPI";
import css from "./MemoryGame.module.css";
import MemoryCard from "./MemoryCard/MemoryCard";
import { getRandomIndexes } from "../../../utils/getRandomIndexes";
import { getEmojisArray } from "../../../utils/getEmojisArray";

const MemoryGame = () => {
  const [formData, setFormData] = useState({
    category: "animals-and-nature",
    number: 10,
  });
  const [isGameOn, setGameOn] = useState(false);
  const [emojisData, setEmojisData] = useState([]);

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = await fetchEmoji(formData.category);
      const dataSlice = getRandomIndexes(data, formData.number).map(
        (number) => data[number]
      );
      const emojisArray = getEmojisArray(dataSlice);
      setEmojisData(emojisArray);
      setGameOn(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={css.container}>
      <Text text="Memory" type="h1" className="title" />
      {!isGameOn && (
        <MemoryForm onSubmit={handleSubmit} handleChange={handleChange} />
      )}
      {isGameOn && <MemoryCard data={emojisData} />}
    </div>
  );
};

export default MemoryGame;
