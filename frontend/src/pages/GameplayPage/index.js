import * as React from 'react';
import { GameplayDisplay } from '../../components/GameplayDisplay';
import 'antd/dist/antd.css';
import { Statistic, Row } from 'antd';
import './index.css';

import { useGameStore } from '../../services/zustand/game';

/*
  function to set the timer for the quiz
*/
const { Countdown } = Statistic;
const minutes = 1000 * 60 * 10; // Example, this is for 10 mins
const deadline = Date.now() + minutes;

//To show a pop up when the time is up (currently not done - have to edit so it does that)
function onTimeUp() {
  console.log('Times Up!');
}

/*
  function to include the components needed and display the information for Quiz Gameplay
*/

const GameplayPage = () => {
  const { currentQuizQuetsions, fetchGameQuiz } = useGameStore();
  const [userAnswers, setUserAnswers] = React.useState({});

  React.useEffect(() => {
    const gameId = 0;
    fetchGameQuiz(gameId);
  }, [fetchGameQuiz]);

  React.useEffect(() => {
    const emptyAnswers = {};
    currentQuizQuetsions.forEach((question) => {
      emptyAnswers[question.questionId] = null;
    });
    setUserAnswers(emptyAnswers);
  }, [currentQuizQuetsions]);

  React.useEffect(() => {
    console.log(userAnswers);
  }, [userAnswers]);

  return (
    <div>
      <div className='header-container'>
        <h2 style={{ color: 'orange' }}> CLOCKWORKS | Quiz 1 </h2>
        <div className='timer-con'>
          <Countdown title='Timer' value={deadline} onTimeUp={onTimeUp} />
        </div>
      </div>

      <Row>
        <div className='question-con'>
          <GameplayDisplay
            quizQuestions={currentQuizQuetsions}
            currentAnswers={userAnswers}
            onAnswerQuestion={(newAnswers) => setUserAnswers(newAnswers)}
          />
        </div>
      </Row>
      <div>
        <h3>Your answers:</h3>
        {Object.keys(userAnswers).map((questionId) => {
          return (
            <p key={questionId}>
              QuestionId: {questionId}, AnswerValue:{' '}
              {userAnswers[questionId] ?? 'No answer'}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default GameplayPage;
