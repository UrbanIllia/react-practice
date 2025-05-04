import React from "react";
import css from "./VoitingItemLi.module.css";

const VoitingItemLi = ({ optionsData }) => {
  return (
    <ul className={css.listLi}>
      {optionsData.map((item) => (
        <li key={item}>{item}:</li>
      ))}
    </ul>
  );
};

export default VoitingItemLi;
