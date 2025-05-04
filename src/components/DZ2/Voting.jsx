import { useState } from "react";
import css from "./Voting.module.css";
import { PiWindowsLogo } from "react-icons/pi";
import { SiLinux, SiMacos } from "react-icons/si";
import { IconContext } from "react-icons";
import { AiOutlineAndroid } from "react-icons/ai";
import VoitingItemBtn from "./VoitingItemBtn";
import VoitingItemLi from "./VoitingItemLi";

const icons = [
  {
    id: 1,
    icon: <PiWindowsLogo />,
  },
  {
    id: 2,
    icon: <SiMacos />,
  },
  {
    id: 3,
    icon: <SiLinux />,
  },
  {
    id: 4,
    icon: <AiOutlineAndroid />,
  },
];
const Voting = () => {
  const [options, setOptions] = useState({
    Macos: 0,
    Windows: 0,
    Linux: 0,
    Android: 0,
  });
  const handleClick = (opt) => {
    console.log(opt);
    setOptions({ ...options, [opt]: options[opt] + 1 });
    // if (opt === "windows") {
    //   setOptions({ ...options, windows: options.windows + 1 });
    // } else if (opt === "Macos") {
    //   setOptions({ ...options, macos: options.macos + 1 });
    // } else if (opt === "Linux") {
    //   setOptions({ ...options, linux: options.linux + 1 });
    // } else if (opt === "Android") {
    //   setOptions({ ...options, android: options.android + 1 });
    // }
  };
  return (
    <div className={css.div}>
      <div>
        <IconContext.Provider value={{ color: "black", size: "50px" }}>
          <ul className={css.iconsWrapp}>
            {icons.map((item) => (
              <li key={item.id}>{item.icon}</li>
            ))}
          </ul>
        </IconContext.Provider>
      </div>
      <ul className={css.listLi}>
        {Object.keys(options).map((item) => (
          <li key={item}>
            {item}: {options[item]}
          </li>
        ))}
      </ul>
      <VoitingItemBtn
        handleClick={handleClick}
        optionsData={Object.keys(options)}
      />
    </div>
  );
};

export default Voting;
