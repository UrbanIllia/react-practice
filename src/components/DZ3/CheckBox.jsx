import clsx from "clsx";
import { useState } from "react";

const CheckBox = () => {
  const [hasAccepted, setHasAccepted] = useState(false);
  const handleChange = (event) => {
    setHasAccepted(event.target.checked);
  };
  return (
    <div className={clsx("flexRow")}>
      <label>
        <input
          type="checkbox"
          name="terms"
          checked={hasAccepted}
          onChange={handleChange}
        />
        I accept terms and conditions
      </label>
      <button type="button" className={clsx("button")} disabled={!hasAccepted}>
        Proceed
      </button>
    </div>
  );
};

export default CheckBox;
