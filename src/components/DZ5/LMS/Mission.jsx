import { SiReactrouter } from "react-icons/si";

const Mission = () => {
  return (
    <div className="px-30 text-white py-8 border-t-2 w-[80%] relative">
      <div className="grid grid-cols-1 items-center ">
        <div className="z-30 h-[350px]">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            At React Router Innovations, our mission is to empower developers
            worldwide by providing a seamless and intuitive routing solution for
            React applications. We strive to enhance user experiences through
            dynamic navigation, performance optimization, and flexible route
            management, ensuring every app feels fast and responsive. Our
            commitment is to support the open-source community with cutting-edge
            tools that simplify complex workflows and inspire creative web
            development.
          </p>
          <p className="text-lg mt-4">
            We aim to lead the industry by continuously evolving React Router,
            integrating the latest technologies, and fostering a collaborative
            environment where developers can thrive. Together, we build the
            future of single-page applications!
          </p>
        </div>
        <div className="flex justify-center z-20 mt-[-450px]">
          <SiReactrouter size={600} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Mission;
