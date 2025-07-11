import { useState } from 'react';
import Game from './Game';
import Result from './Result';
import { questions } from './questions';

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
    <div
      className="flex min-h-screen items-center justify-center bg-gray-900 text-white"
      style={{
        backgroundImage: `url('/images/quize.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundBlendMode: 'overlay',
      }}
    >
      <div className="bg-opacity-90 relative container mx-auto max-w-2xl rounded-xl bg-gray-800 p-6 shadow-lg">
        <div className="absolute inset-0 z-0 rounded-xl bg-gradient-to-b from-gray-800/50 to-transparent"></div>
        <div className="relative z-10">
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
    </div>
  );
};

export default Quiz;
