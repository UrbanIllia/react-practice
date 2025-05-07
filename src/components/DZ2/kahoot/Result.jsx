import css from "./Result.module.css";

const Result = ({ correct, total, startAgain }) => {
  return (
    <div className={css.card}>
      <img
        className={css.poster}
        src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
        alt="final"
      />
      <h2>
        Ви відповіли правильно на {correct} питання з {total}
      </h2>
      <button className={css.btn} onClick={startAgain}>
        Спробувати знову
      </button>
    </div>
  );
};

export default Result;
