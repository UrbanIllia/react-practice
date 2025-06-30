
import { ScaleLoader } from "react-spinners";

const Loader = () => {
  return (
    <div>
      <ScaleLoader
        color="red"
        width={20}
        height={100}
        radius={20}
        barCount={12}
      />

    </div>
  );
};

export default Loader;
