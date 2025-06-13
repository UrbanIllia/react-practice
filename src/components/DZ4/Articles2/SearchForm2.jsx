import css from "./SearchForm2.module.css";

const SearchForm2 = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value.trim();
    if (topic === "") {
      alert("Please enter a topic");
      return;
    }
    onSearch(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        className={css.input}
        name="topic"
        placeholder="Please enter here..."
      />
      <button type="submit" className={css.btn}>
        Search
      </button>
    </form>
  );
};

export default SearchForm2;
