import * as React from 'react';
import { Statistic, Row, Col } from 'antd';

import './index.css'

const DashboardDisplay = () => {
  return <div className='dashboard'>
    
    <Row gutter={16}>
    <Col span={15}>
      <Statistic id='stat1' title="Number of Quizzes" value={5} />
    </Col>
    <Col span={15}>
      <Statistic id='stat2' title="Total Players" value={18} />
    </Col>
    <Col span={15}>
      <Statistic id='stat3' title="Avg. Time Completed (Mins)" value={10} />
    </Col>
    <Col span={15}>
      <Statistic id='stat4' title="Avg. Game Score" value={76} />
    </Col>
    <Col span={15}>
      <Statistic id='stat5'title="Challenges Sent" value={5} />
    </Col>
    <Col span={15}>
      <Statistic id='stat6' title="Challenges Accepted" value={3} />
    </Col>
  </Row>,
  </div>;
};

export { DashboardDisplay };
