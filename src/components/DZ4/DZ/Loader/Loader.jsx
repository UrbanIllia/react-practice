import { SquareLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="text-center">
      <SquareLoader size={140} color="red" speedMultiplier={0.8} />
    </div>
  );
};

export default Loader;
