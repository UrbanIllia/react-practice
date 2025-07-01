import React from "react";
import { SiReactrouter } from "react-icons/si";

const Team = () => {
  return (
    <div className="px-30 text-white py-8 border-t-2 w-[80%] relative">
      <div className="grid grid-cols-1 items-center">
        <div className="z-30 h-[350px]">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <ul className="space-y-4">
            <li className="text-lg">
              <strong>Johnathan Smith</strong> - Chief Technology Officer
              <p>
                Leads the technical vision, with over 15 years in React
                development.
              </p>
            </li>
            <li className="text-lg">
              <strong>Emily Johnson</strong> - Lead Developer
              <p>
                Specializes in routing solutions, bringing 10 years of expertise
                to the table.
              </p>
            </li>
            <li className="text-lg">
              <strong>Michael Brown</strong> - UI/UX Designer
              <p>
                Designs intuitive interfaces, ensuring seamless navigation
                experiences.
              </p>
            </li>
            <li className="text-lg">
              <strong>Sarah Davis</strong> - Community Manager
              <p>
                Connects with the open-source community, organizing events and
                support.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center z-20 mt-[-450px]">
          <SiReactrouter size={600} color="gray" />
        </div>
      </div>
    </div>
  );
};

export default Team;
