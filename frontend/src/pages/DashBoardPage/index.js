import * as React from 'react';
import { Stats } from '../../components/DashboardStats';
import { LDTable } from '../../components/LDTable';
import { Button } from 'antd';
import './index.css';
import { Link } from 'react-router-dom';

//function to include the components needed and display the information for dashboard
const DashboardPage = () => {
  return (
    <div>

      <div className='container1'>
        <h1>My Dashboard</h1>
      </div>

      <div className='container2'>
        <div className='item'>
          <Stats />                 {/* stats component */}
        </div>
        <div className='item'>
          <LDTable />               {/* leader board table component */}
        </div>
      </div>
        
      <div className='container3'>
        <div className='container3-item'>
          <Button type="primary">
            <Link to={'dashboard/editgame'}>Edit Game</Link>    {/* internal link to edit game page */}
          </Button>
        </div>
        <div className='container3-item'>
          <Button type="primary">
            <Link to={'dashboard/editquiz'}>Edit Quiz</Link>    {/* internal link to edit quiz page */}
          </Button>
        </div>
      </div>
      
    </div>
  );
};

export default DashboardPage;
