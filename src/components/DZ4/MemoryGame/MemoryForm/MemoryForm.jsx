import RegularButton from "../RegularButton/RegularButton";
import Select from "../Select/Select";
import Text from "../Text/Text";
import css from "./MemoryForm.module.css";

const MemoryForm = ({ handleChange, onSubmit }) => {
  return (
    <div className={css.formContainer}>
      <Text
        text="Customize the game by selecting an emoji category and a number of memory
        cards."
        size="regular"
      />
      <form className={css.form} onSubmit={onSubmit}>
        <Select handleChange={handleChange} />
        <RegularButton type={"submit"} style="btnText">
          Start Game
        </RegularButton>
      </form>
    </div>
  );
};

export default MemoryForm;
