import css from "./Form.module.css";

const Form = ({ onAdd }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({
      id: crypto.randomUUID(),
      todo: event.target.elements.text.value,
    });
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input type="text" name="text" className={css.input} />
      <button type="submit" className={css.button}>
        Add task
      </button>
    </form>
  );
};

export default Form;
