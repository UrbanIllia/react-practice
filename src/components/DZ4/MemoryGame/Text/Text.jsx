import clsx from "clsx";
import css from "./Text.module.css";

const Text = ({ text, size, type = "p", className }) => {
  const Type = type;
  return (
    <div>
      <Type
        className={clsx({ [css[size]]: size, [css[className]]: className })}
      >
        {text}
      </Type>
    </div>
  );
};

export default Text;
