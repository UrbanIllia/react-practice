import { useContext } from "react";
import { myContext } from "./UseContextExample";
import { PiNumberThreeDuotone } from "react-icons/pi";
// import useHttp from "../../hooks/useHttp";

const ComponentTres = ({ message }) => {
  const { contextMessage } = useContext(myContext);
  //   const { data, isLoading, isError } = useHttp("https://dummyjson.com/users");
  console.log(contextMessage);
  return (
    <div className="target">
      <PiNumberThreeDuotone size={70} />
      <h2>This is target component</h2>
      <h2 style={{ color: "blue", fontSize: "22px" }}>
        Props drilling: {message}
      </h2>
      <h2 style={{ color: "green", fontSize: "22px" }}>
        Context: {contextMessage}
      </h2>
    </div>
  );
};
export default ComponentTres;
