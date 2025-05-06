import clsx from "clsx";
import css from "./FigureSkatingResults.module.css";
import {
  GiDiceSixFacesFive,
  GiDiceSixFacesFour,
  GiDiceSixFacesOne,
  GiDiceSixFacesThree,
  GiDiceSixFacesTwo,
} from "react-icons/gi";
import { RxReset } from "react-icons/rx";
import Heading from "../Heading/Heading";
const FigureSkatingResults = ({ points, handleReset, totalResult }) => {
  return (
    <div>
      <Heading text="Your points" />
      <ul className={clsx("flexRow", css.resultsList)}>
        <li className={clsx("flexColumn", css.wrapMarks)}>
          <GiDiceSixFacesOne size={40} />
          <span
            className={clsx(css.span, {
              [css.yellow]: points.One > 5,
              [css.green]: points.One > 10,
            })}
          >
            {points.One}
          </span>
        </li>
        <li className={clsx("flexColumn", css.wrapMarks)}>
          <GiDiceSixFacesTwo size={40} />
          <span
            className={clsx(css.span, {
              [css.yellow]: points.Two > 5,
              [css.green]: points.Two > 10,
            })}
          >
            {points.Two}
          </span>
        </li>
        <li className={clsx("flexColumn", css.wrapMarks)}>
          <GiDiceSixFacesThree size={40} />
          <span
            className={clsx(css.span, {
              [css.yellow]: points.Three > 5,
              [css.green]: points.Three > 10,
            })}
          >
            {points.Three}
          </span>
        </li>
        <li className={clsx("flexColumn", css.wrapMarks)}>
          <GiDiceSixFacesFour size={40} />
          <span
            className={clsx(css.span, {
              [css.yellow]: points.Four > 5,
              [css.green]: points.Four > 10,
            })}
          >
            {points.Four}
          </span>
        </li>
        <li className={clsx("flexColumn", css.wrapMarks)}>
          <GiDiceSixFacesFive size={40} />
          <span
            className={clsx(css.span, {
              [css.yellow]: points.Five > 5,
              [css.green]: points.Five > 10,
            })}
          >
            {points.Five}
          </span>
        </li>
      </ul>
      <span className={css.total}>Total result: {totalResult}</span>
      <button onClick={handleReset} className={clsx("flexRow", css.reset)}>
        <RxReset size={50} />
      </button>
    </div>
  );
};

export default FigureSkatingResults;
