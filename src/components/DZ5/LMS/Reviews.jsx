import React from "react";
import { SiReactrouter } from "react-icons/si";

const Reviews = () => {
  return (
    <div className="px-30 text-white border-t-2 py-8 w-[80%]">
      <div className="grid grid-cols-1 items-center">
        <div className="z-30 h-[350px]">
          <h2 className="text-3xl font-bold mb-4">What People Say</h2>
          <ul className="space-y-6 list-disc">
            <li className="text-lg">
              <p>
                <strong>Alex Carter</strong> - Freelance Developer
                <br />
                "React Router has transformed how I build SPAs. The dynamic
                routing feature saved me hours of work!"
              </p>
            </li>
            <li className="text-lg">
              <p>
                <strong>Lisa Martinez</strong> - Startup Founder
                <br />
                "The performance optimization with lazy loading is a
                game-changer for our app's load time."
              </p>
            </li>
            <li className="text-lg">
              <p>
                <strong>Robert Lee</strong> - Senior Engineer
                <br />
                "Nested routing made our dashboard project so much cleaner.
                Highly recommend!"
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

export default Reviews;
