import * as React from 'react';
import { Table } from 'antd';

import './index.css';

const LDTable = () => {
  return <Table columns={columns} dataSource={data} onChange={onChange} />
};

const columns = [
    {
        title: 'Leader Board',
        children: [
        {
            title: 'Name',
            dataIndex: 'name',
            width: 200,
        },
        {
            title: 'Quiz 1',
            dataIndex: 'quiz1',
            width: 150,
            sorter: {
                compare: (a, b) => a.quiz1 - b.quiz1,
            },
        },
        {
            title: 'Quiz 2',
            dataIndex: 'quiz2',
            width: 150,
            sorter: {
                compare: (a, b) => a.quiz2 - b.quiz2,
            },
        },
          {
            title: 'Quiz 3',
            dataIndex: 'quiz3',
            width: 150,
            sorter: {
                compare: (a, b) => a.quiz3 - b.quiz3,
            },
          },       
        ]
    },
    
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      quiz1: 98,
      quiz2: 60,
      quiz3: 70,
    },
    {
      key: '2',
      name: 'Jim Green',
      quiz1: 98,
      quiz2: 66,
      quiz3: 89,
    },
    {
      key: '3',
      name: 'Joe Black',
      quiz1: 98,
      quiz2: 90,
      quiz3: 70,
    },
    {
      key: '4',
      name: 'Jim Red',
      quiz1: 88,
      quiz2: 99,
      quiz3: 89,
    },
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

export { LDTable };

