import * as React from 'react';
import { DashboardDisplay } from '../../components/DashboardDisplay';
import { LDTable } from '../../components/LDTable';
import { Button } from 'antd';
import './index.css';
import { Link } from 'react-router-dom';

const DashboardPage = () => {
  return (
    <div>

      <div className='container1'>
        <h1>My Dashboard</h1>
      </div>

      <div className='container2'>
        <div className='item'>
          <DashboardDisplay />
        </div>
        <div className='item'>
          <LDTable />
        </div>
      </div>
        
      <div className='container3'>
        <div className='container3-item'>
          <Button type="primary">
            <Link to={'dashboard/editgame'}>Edit Game</Link>
          </Button>
        </div>
        <div className='container3-item'>
          <Button type="primary">
            <Link to={'dashboard/editquiz'}>Edit Quiz</Link>
          </Button>
        </div>
      </div>
      {/* <DashboardDisplay id='dashboard'/>
      <LDTable />
      <Button id='btn1' type="primary">
        <Link to={'dashboard/editgame'}>Edit Game</Link>
      </Button>
      <Button id='btn2' type="primary">
        <Link to={'dashboard/editquiz'}>Edit Quiz</Link>
      </Button> */}
      
    </div>
  );
};

export default DashboardPage;
