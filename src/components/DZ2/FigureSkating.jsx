import { useState } from "react";
import css from "./FigureSkating.module.css";
import clsx from "clsx";

import FigureSkatingItem from "./FigureSkatingItem";

import { IoDice } from "react-icons/io5";
import FigureSkatingResults from "./FigureSkatingResults";
import Heading from "../Heading/Heading";

const FigureSkating = () => {
  const [points, setPoints] = useState({
    One: 0,
    Two: 0,
    Three: 0,
    Four: 0,
    Five: 0,
  });
  const handleClick = (item, index) => {
    setPoints({ ...points, [item]: points[item] + index });
  };
  const handleReset = () => {
    setPoints({
      One: 0,
      Two: 0,
      Three: 0,
      Four: 0,
      Five: 0,
    });
  };
  const totalResult = Object.values(points).reduce(
    (acc, item) => acc + item,
    0
  );
  return (
    <section className={css.section}>
      <IoDice size={80} className={css.diceTitle} />
      <ul className={clsx("flexRow")}>
        {Object.keys(points).map((item, index) => (
          <FigureSkatingItem
            key={item}
            data={item}
            index={index + 1}
            handleClick={handleClick}
          />
        ))}
      </ul>
      {totalResult === 0 ? (
        <Heading text="Нажми уже, че смотришь...?" variant="info" />
      ) : (
        <FigureSkatingResults
          points={points}
          handleReset={handleReset}
          totalResult={totalResult}
        />
      )}
    </section>
  );
};

export default FigureSkating;
