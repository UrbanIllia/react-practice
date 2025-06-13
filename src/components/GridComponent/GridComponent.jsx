import css from "./GridComponent.module.css";

function GridComponent({ children, ref }) {
  return (
    <ul ref={ref} className={css.list}>
      {children}
    </ul>
  );
}

export default GridComponent;
