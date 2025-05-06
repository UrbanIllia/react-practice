import css from "./Modal2.module.css";

const Modal2 = ({ children, title, handleClickClose, handleClickBackdrop }) => {
  return (
    <div onClick={handleClickBackdrop} className={css.wrapper}>
      <div className={css.content}>
        <h1 className={css.title}>{title}</h1>
        <hr />
        <button onClick={handleClickClose} className={css.closeBtn}>
          ×
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal2;
