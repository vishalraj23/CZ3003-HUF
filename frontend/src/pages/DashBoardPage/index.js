import * as React from 'react';
import { DashboardDisplay } from '../../components/DashboardDisplay';
import { LDTable } from '../../components/LDTable';
import { Button } from 'antd';
import './index.css';

const DashboardPage = () => {
  return (
    <div className='container'>
      <h1>My Dashboard</h1>
      <DashboardDisplay id='dashboard'/>
      <Button id='btn1' type="primary">Edit Game</Button>
      <Button id='btn2' type="primary">Edit Quiz</Button>
      <LDTable />
    </div>
  );
};

export default DashboardPage;
