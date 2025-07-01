import { SiReactrouter } from "react-icons/si";
import AdvantagesList from "./AdvantagesList";
import { getAdvantages } from "./fakeAPI";

const Advantages = () => {
  const advantages = getAdvantages();
  return (
    <div className="flex flex-col items-center py-25 bg-black h-[600px] gap-25 relative">
      <h1 className="text-[50px] text-center text-white font-bold">
        Advantages
      </h1>
      <AdvantagesList advantages={advantages} />
      <SiReactrouter
        size={100}
        color="white"
        className="absolute top-0 right-5"
      />
    </div>
  );
};

export default Advantages;
