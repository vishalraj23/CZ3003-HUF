import * as React from 'react';
import { GameplayDisplay } from '../../components/GameplayDisplay';
import 'antd/dist/antd.css';
import { Statistic, Row, Col } from 'antd';

import './index.css';

const { Countdown } = Statistic;
const minutes = 1000*60*10;
const deadline = Date.now() + minutes; // Moment is also OK

function onTimeUp() {
  console.log('Times Up!');
}



const GameplayPage = () => {
  return (
    <div className='container'>
        <div className='box-1'> <Col> <h2> CLOCKWORKS | Quiz 1 </h2></Col></div>
        <Col gutter={[16, 16]}>
          <Col span={24}>
            <div className='timer-con'> <Countdown title="Timer" value={deadline} onTimeUp={onTimeUp} /></div>
          </Col>   
      </Col>

      <Row>
      <div className = 'question-con'>
        <GameplayDisplay /> 
      </div>
      </Row>
    </div>
  );
};

export default GameplayPage
