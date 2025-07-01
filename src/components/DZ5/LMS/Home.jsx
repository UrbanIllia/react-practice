import { SiReactrouter } from "react-icons/si";
const Home = () => {
  return (
    <div className="flex flex-col items-center py-25 bg-black h-[600px]">
      <h1 className="text-[50px] text-center text-white font-bold">
        Wellcome to React Router
      </h1>
      <SiReactrouter size={300} color="white" />
    </div>
  );
};

export default Home;
