import css from "./SearchForm.module.css";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const topic = form.elements.topic.value;
    if (form.elements.topic.value.trim() === "") {
      alert("Please enter search term!");
      return;
    }
    onSearch(topic);
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="text"
        name="topic"
        placeholder="Search articles..."
        className={css.input}
      />
      <button className={css.btn} button="button">
        Search
      </button>
    </form>
  );
};

export default SearchForm;
