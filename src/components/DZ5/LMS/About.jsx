import { SiReact, SiReactrouter } from "react-icons/si";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center py-25 bg-black min-h-[600px] gap-25 relative ">
      <h1 className="text-[50px] text-center text-white font-bold">About US</h1>
      <p className="text-white text-2xl text-center w-[600px]">
        React Router is a multi-strategy router for React bridging the gap from
        React 18 to React 19. You can use it maximally as a React framework or
        minimally as a library with your own architecture.
      </p>
      <ul className="flex flex-crow gap-8">
        <li>
          <Link
            to="mission"
            className="text-white px-6 py-2 border-2 rounded-2xl hover:bg-gray-700 transition"
          >
            Our Mission
          </Link>
        </li>
        <li>
          <Link
            to="team"
            className="text-white px-6 py-2 border-2 rounded-2xl hover:bg-gray-700 transition"
          >
            Our Fantastic Team
          </Link>
        </li>
        <li>
          <Link
            to="reviews"
            className="text-white px-6 py-2 border-2 rounded-2xl hover:bg-gray-700 transition"
          >
            Reviews
          </Link>
        </li>
      </ul>
      <Outlet />
      <SiReactrouter
        size={100}
        color="white"
        className="absolute top-0 right-5"
      />
      {/* <SiReact size={80} color="white" className="absolute bottom-5 left-5" /> */}
    </div>
  );
};

export default About;
