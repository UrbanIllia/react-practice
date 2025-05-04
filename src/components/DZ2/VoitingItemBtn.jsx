import css from "./VoitingItemBtn.module.css";
const VoitingItemBtn = ({ handleClick, optionsData }) => {
  return (
    <section className={css.listbtn}>
      {optionsData.map((item) => (
        <button key={item} onClick={() => handleClick(item)}>
          {item}
        </button>
      ))}
    </section>
  );
};

export default VoitingItemBtn;
