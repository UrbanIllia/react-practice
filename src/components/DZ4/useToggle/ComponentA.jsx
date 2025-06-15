import { useToggle } from "../../../hooks/useToggle";
import Heading from "../../Heading/Heading";
import css from "./ComponentAB.module.css";

const ComponentA = () => {
  const { isOpen, open, close } = useToggle();
  return (
    <div className={css.wrap}>
      <Heading text="Custom Hook" />
      <button onClick={open} className="button">
        Open modal
      </button>
      {/* <Modal isOpen={isOpen} onClose={close} /> */}
      <div isOpen={isOpen} onClose={close}></div>
    </div>
  );
};

export default ComponentA;
