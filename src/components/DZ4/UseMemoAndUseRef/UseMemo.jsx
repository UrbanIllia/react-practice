import { useMemo, useState } from "react";
import Heading from "../../Heading/Heading";
import css from "./UseMemoAndUseRef.module.css";

const UseMemo = () => {
  const [planets, setPlanets] = useState(["Earth", "Mars", "Jupiter", "Venus"]);
  const [query, setQuery] = useState("");
  const [clicks, setClicks] = useState(0);
  const filteredPlanets = useMemo(
    () => planets.filter((planet) => planet.includes(query)),
    [planets, query]
  );
  //   const filteredPlanets = planets.filter((planet) => planet.includes(query));
  return (
    <div className={css.wrapp}>
      <Heading text="UseMemo" />
      <button onClick={() => setClicks(clicks + 1)} className={css.btn}>
        Number of clicks: {clicks}
      </button>
      <ul className={css.list}>
        {filteredPlanets.map((planet) => (
          <li key={planet} className={css.item}>
            {planet}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
