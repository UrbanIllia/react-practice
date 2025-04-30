import css from "./ClickCounter.module.css";

const ClickCounter2 = ({ children, value, onUpdate }) => {
  return (
    <div className={css.wrapp}>
      <button className={css.btn} onClick={onUpdate}>
        Push me! {children}
      </button>
      <span> Clicks: {value}</span>
    </div>
  );
};

export default ClickCounter2;
