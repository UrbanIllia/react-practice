import { ClimbingBoxLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex justify-center items-center">
      <ClimbingBoxLoader size={20} color="red" />
    </div>
  );
};

export default Loader;
