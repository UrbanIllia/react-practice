import css from "./Container.module.css";

const Container = ({ children, className = "" }) => {
  return <div className={[css.container, className].join(" ")}>{children}</div>;
};

export default Container;
