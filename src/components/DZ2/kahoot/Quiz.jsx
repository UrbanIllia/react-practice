import { useState } from "react";
import Game from "./Game";
import Result from "./Result";
import { questions } from "./questions";
import css from "./Quiz.module.css";
const Quiz = () => {
  const [step, setStep] = useState(0);
  const [correct, setCorrect] = useState(0);
  const handleClick = (index) => {
    if (index === questions[step].correct) {
      setCorrect(correct + 1);
    }

    setStep(step + 1);
  };
  const handleStartAgain = () => {
    setStep(0);
    setCorrect(0);
  };
  const percentage = Math.round((step / questions.length) * 100);
  console.log(questions);
  return (
    <div className={css.mainWrapp}>
      <div className={css.container}>
        {step !== questions.length ? (
          <Game
            percentage={percentage}
            {...questions[step]}
            handleClick={handleClick}
          />
        ) : (
          <Result
            correct={correct}
            total={questions.length}
            startAgain={handleStartAgain}
          />
        )}
      </div>
    </div>
  );
};

export default Quiz;
