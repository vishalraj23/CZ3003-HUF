import * as React from 'react';
import { GameplayDisplay } from '../../components/GameplayDisplay';
import 'antd/dist/antd.css';
import { Statistic, Row } from 'antd';
import './index.css';

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
  return (
    <div>
      <div className='header-container'>
        <h2> CLOCKWORKS | Quiz 1 </h2>
        <div className='timer-con'>
          <Countdown title='Timer' value={deadline} onTimeUp={onTimeUp} />
        </div>
      </div>

      <Row>
        <div className='question-con'>
          <GameplayDisplay />
        </div>
      </Row>
    </div>
  );
};

export default GameplayPage;
