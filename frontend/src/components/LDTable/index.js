import * as React from 'react';
import { Table } from 'antd';
import './index.css';
import { data } from '../../mockData.js';

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
            width: 150,
        },
        {
            title: 'Quiz 1',
            dataIndex: 'quiz1',
            width: 100,
            sorter: {
                compare: (a, b) => a.quiz1 - b.quiz1,
            },
        },
        {
            title: 'Quiz 2',
            dataIndex: 'quiz2',
            width: 100,
            sorter: {
                compare: (a, b) => a.quiz2 - b.quiz2,
            },
        },
          {
            title: 'Quiz 3',
            dataIndex: 'quiz3',
            width: 100,
            sorter: {
                compare: (a, b) => a.quiz3 - b.quiz3,
            },
          },       
        ]
    },
    
  ];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
  }

export { LDTable };

