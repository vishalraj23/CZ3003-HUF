import * as React from 'react';
import { useState } from 'react';
import { Radio, Space, Row, Button } from 'antd';
import "antd/dist/antd.css";

import './index.css';

/*
function to display the questions in the quiz and return the marks gotten (currenty not done)
 */

const GameplayDisplay = () => {

    const [value, setChange] = useState(1);

    const onChange = (e) => {
        setChange({value: e.target.value})
        console.log(e.target.value);
    }

  return (
    <div className='question-container'>
       <div className='question-container'>
           <Row><h1>Question 1) What is the name of this game? </h1></Row>
            <Radio.Group name="radiogroup" onChange={onChange} defaultValue={null}>
                <Space direction="vertical">
                    <Radio value={1}>CLOCKWORKS</Radio>
                    <Radio value={2}>Clock game</Radio>
                    <Radio value={3}>Clock</Radio>
                    <Radio value={4}>None of the Above</Radio>
                </Space>
            </Radio.Group>
        </div> 
        <br/>
        <div className='question-container'>
            <Row><h1>Question 2) What is 2+2? </h1></Row>
            <Radio.Group name="radiogroup" onChange={onChange} defaultValue={null}>
                <Space direction="vertical">
                    <Radio value={1}>3</Radio>
                    <Radio value={2}>4</Radio>
                    <Radio value={3}>5</Radio>
                    <Radio value={4}>6</Radio>
                </Space>
            </Radio.Group>
        </div> 
        <br/>
        <div className='question-container'>
           <Row><h1>Question 3) What is our group name? </h1></Row>
            <Radio.Group name="radiogroup" onChange={onChange} defaultValue={null}>
                <Space direction="vertical">
                    <Radio value={1}>Hufflepuff</Radio>
                    <Radio value={2}>SSAD</Radio>
                    <Radio value={3}>idk</Radio>
                    <Radio value={4}>HUF</Radio>
                </Space>
            </Radio.Group>
        </div> 
        <div className='button-container'>
            <Button type="primary"  style={{ background : "orange", borderColor: "orange" }}>Finish Quiz</Button>
        </div>
    </div>
  );
};

export { GameplayDisplay };