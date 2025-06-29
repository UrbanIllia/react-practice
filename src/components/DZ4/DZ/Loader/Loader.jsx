import { BarLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex flex-row justify-center items-center ">
      <BarLoader height={20} width={220} color="#b51212" />
    </div>
  );
};

export default Loader;
