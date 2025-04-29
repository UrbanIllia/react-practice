import css from "./CustomButton.module.css";

const CustomButton = ({ children, message }) => {
  const handleClick = () => {
    return alert(message);
  };
  return (
    <button className={css.button} onClick={handleClick}>
      {children}
    </button>
  );
};

export default CustomButton;
