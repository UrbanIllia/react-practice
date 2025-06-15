import { useToggle } from "../../../hooks/useToggle";
import Heading from "../../Heading/Heading";
import css from "./ComponentAB.module.css";

const ComponentB = () => {
  const { isOpen, open, close } = useToggle();
  return (
    <div className={css.wrap}>
      <Heading text="UseToggle" />
      <button onClick={open} className="button">
        Open sidebar
      </button>
      {/* <Sidebar isOpen={isOpen} onClose={close} /> */}
      <div isOpen={isOpen} onClose={close}></div>
    </div>
  );
};

export default ComponentB;
