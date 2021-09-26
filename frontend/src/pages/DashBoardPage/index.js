import * as React from 'react';
import { DashboardDisplay } from '../../components/DashboardDisplay';
import { LDTable } from '../../components/LDTable';
import { Buttons } from '../../components/Buttons';
import './index.css';

const DashboardPage = () => {
  return (
    <div className='container'>
      <h1>My Dashboard</h1>
      <DashboardDisplay />
      <Buttons btnName='Edit Game' />
      <Buttons btnName='Edit Quiz' />
      <LDTable />
    </div>
  );
};

export default DashboardPage;
