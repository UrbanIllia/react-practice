import { PiNumberCircleOne, PiNumberCircleOneFill } from "react-icons/pi";
import ComponentDos from "./ComponentDos";

const ComponentUno = ({ message }) => {
  return (
    <div className="first">
      <PiNumberCircleOneFill color="white" size={70} />
      <h3 style={{ color: "black", fontSize: "28px" }}>First Component</h3>
      <ComponentDos message={message} />
    </div>
  );
};
export default ComponentUno;
