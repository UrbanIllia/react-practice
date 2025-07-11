import { SiReactrouter } from "react-icons/si";

const Home = () => {
  return (
    <div className="flex flex-col items-center py-16 bg-black h-[600px] overflow-hidden">
      <h1 className="text-[50px] text-center text-white font-bold animate-slideDown">
        Wellcome to React Router
      </h1>
      <SiReactrouter
        size={400}
        color="white"
        className="animate-slideUp mt-[-420px]"
      />
    </div>
  );
};

export default Home;
