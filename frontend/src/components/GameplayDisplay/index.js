import * as React from 'react';
import { useState } from 'react';
import { render } from "react-dom";
import { Radio, Input, Space, Row } from 'antd';
import "antd/dist/antd.css";

import './index.css';

const GameplayDisplay = () => {

    const [value, setChange] = useState(1);

    const onChange = (e) => {
        setChange({value: e.target.value})
    }

  return (
    <div className='container'>
       <div className='container'>
           <Row><h1>Hello</h1></Row>
            <Radio.Group onChange={onChange} value={value}>
                <Space direction="vertical">
                    <Radio value={1}>Option A</Radio>
                    <Radio value={2}>Option B</Radio>
                    <Radio value={3}>Option C</Radio>
                    <Radio value={4}>Option D</Radio>
                </Space>
            </Radio.Group>
       </div>
            
                            
        
    </div>
  );
};

export { GameplayDisplay };