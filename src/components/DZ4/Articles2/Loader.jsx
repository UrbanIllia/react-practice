import {
  ClimbingBoxLoader,
  CircleLoader,
  ClockLoader,
  BounceLoader,
  RotateLoader,
  RingLoader,
  PuffLoader,
  PacmanLoader,
  BarLoader,
} from "react-spinners";
import css from "./Articles2.module.css";

const Loader = () => {
  return (
    <div className={css.loaderWrap}>
      <ClockLoader size={100} color="red" />
      <ClimbingBoxLoader size={20} color="blue" />
      <BounceLoader size={100} color="green" />
      <CircleLoader size={100} color="black" speedMultiplier={0.5} />
      <RotateLoader size={20} color="blue" speedMultiplier={0.7} />
      <RingLoader size={100} color="#f12ad3" speedMultiplier={0.7} />
      <PuffLoader size={100} color="#ff6016" speedMultiplier={0.7} />
      <PacmanLoader size={30} color="#00a4d1" speedMultiplier={1} />
      <BarLoader
        width={330}
        height={30}
        color="black"
        speedMultiplier={1}
        cssOverride={{ borderRadius: "16px" }}
      />
    </div>
  );
};

export default Loader;
