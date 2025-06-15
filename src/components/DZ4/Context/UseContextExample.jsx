import { createContext } from "react";
import ComponentUno from "./ComponentUno";
import Modal2 from "../../DZ2/Modal2";
import { useToggle } from "../../../hooks/useToggle";

export const myContext = createContext();

const UseContextExample = () => {
  const { isOpen, open, close } = useToggle();
  const message = "Hello Mr.Urban";
  return (
    <myContext.Provider value={{ contextMessage: "Context data" }}>
      <div className="parent">
        <h2>useContext Example</h2>
        {isOpen && (
          <Modal2
            handleClickClose={close}
            title="This is Modal Window))"
            handleClickBackdrop={close}
          />
        )}
        <button onClick={open} className="button">
          Click to Open Modal Window! And close with custom hook.
        </button>
        <ComponentUno message={message} />
      </div>
    </myContext.Provider>
  );
};
export default UseContextExample;
