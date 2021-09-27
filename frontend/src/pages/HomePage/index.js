import * as React from 'react';
import { Card } from 'antd';

import './index.css';

const HomePage = () => {
  return (
    <div className='container'>
      <div className='info-container'>
        <p className='text'>
          Hi <span className='text-highlight'>James</span>,
        </p>
        <p className='text'>
          Please select <span className='text-highlight'>view game</span> to
          browse a game to play. You can also select{' '}
          <span className='text-highlight'>create a game</span> to design your
          custom game.
        </p>
        <div className='card-container'>
          <Card
            className='card'
            hoverable
            cover={
              <div className='cover'>
                <img className='cover-image' alt='game' src='./game.png' />
              </div>
            }
          >
            <div className='card-description'>View Games</div>
          </Card>
          <Card
            className='card'
            hoverable
            cover={
              <div className='cover'>
                <img
                  className='cover-image'
                  alt='game'
                  src='./create-game.png'
                />
              </div>
            }
          >
            <div className='card-description'>Create a Game</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
