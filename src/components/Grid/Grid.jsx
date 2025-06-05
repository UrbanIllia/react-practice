import css from "./Grid.module.css";

const Grid = () => {
  return (
    <div>
      <div className={css.wrapp}>
        <div className={css.item}>1</div>
        <div className={css.item}>2</div>
        <div className={css.item}>3</div>
        <div className={css.item}>4</div>
        <div className={css.item}>5</div>
        <div className={css.item}>6</div>
        <div className={css.item}>7</div>
        <div className={css.item}>8</div>
        <div className={css.item}>9</div>
        <div className={css.item}>10</div>
      </div>
      <div className={css.wrapp1}>
        <div className={`${css.item1} ${css.header1}`}>Header</div>
        <div className={`${css.item1} ${css.main1}`}>Sidebar</div>
        <div className={`${css.item1} ${css.aside1}`}>Main</div>
        <div className={`${css.item1} ${css.footer1}`}>Footer</div>
      </div>
      <div className={css.wrapp2}>
        <div className={css.item2}>Item 1</div>
        <div className={css.item2}>Item 2</div>
        <div className={css.item2}>Item 3</div>
        <div className={css.item2}>Item 4</div>
      </div>
    </div>
  );
};

export default Grid;
