import clsx from "clsx";
import { useState } from "react";

const RadioBtn = () => {
  const [radioValue, setRadioValue] = useState("sm");
  const handleChange = (event) => {
    setRadioValue(event.target.value);
  };
  return (
    <div className={clsx("flexRow")}>
      <p>Selected size: {radioValue}</p>
      <label>
        <input
          type="radio"
          name="tvSize"
          value="sm"
          checked={radioValue === "sm"}
          onChange={handleChange}
        />
        Small
      </label>
      <label>
        <input
          type="radio"
          name="tvSize"
          value="md"
          checked={radioValue === "md"}
          onChange={handleChange}
        />
        Medium
      </label>
      <label>
        <input
          type="radio"
          name="tvSize"
          value="bg"
          checked={radioValue === "bg"}
          onChange={handleChange}
        />
        Big
      </label>
      <label>
        <input
          type="radio"
          name="tvSize"
          value="xl"
          checked={radioValue === "xl"}
          onChange={handleChange}
        />
        XXL
      </label>
    </div>
  );
};

export default RadioBtn;
