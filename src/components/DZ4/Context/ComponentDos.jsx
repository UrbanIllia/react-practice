import { PiNumberSquareTwoDuotone } from "react-icons/pi";
import ComponentTres from "./ComponentTres";
import Modal2 from "../../DZ2/Modal2";
import { useToggle } from "../../../hooks/useToggle";
import useKeyDown from "../../../hooks/useKeyDown";
import { toast } from "react-toastify";
// import useKeyDown from "../../hooks/useKeyDown";

const ComponentDos = ({ message }) => {
  const { isOpen, open, close } = useToggle();
  useKeyDown(() => toast.error("HOOK USE KEYDOWN"), "Shift");
  return (
    <div className="second">
      <PiNumberSquareTwoDuotone size={70} />
      <h3>Second Component</h3>
      {isOpen && (
        <Modal2
          onClose={close}
          handleClickClose={close}
          title="This is Modal Window))"
          handleClickBackdrop={close}
        />
      )}
      <button
        onClick={open}
        className="button"
        style={{ backgroundColor: "red" }}
      >
        Click to open Modal Window too! And close with custom hook.
      </button>
      <ComponentTres message={message} />
    </div>
  );
};
export default ComponentDos;
