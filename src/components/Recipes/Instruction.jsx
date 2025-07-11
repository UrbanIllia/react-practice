import React from "react";
import { useOutletContext } from "react-router-dom";

const Instruction = () => {
  const recipe = useOutletContext();
  return (
    <div className="flex flex-col justify-center items-center px-15 ">
      <h2 className="text-2xl font-semibold mt-4 mb-2 text-yellow-400">
        Instructions:
      </h2>
      <ol className="list-decimal pl-6">
        {recipe.instructions?.map((step, index) => (
          <li key={index} className="text-lg mb-2">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Instruction;
