import * as React from 'react';
import { useState } from 'react';
import {  Form, Input, Button, InputNumber, Modal } from 'antd';
import { Link } from 'react-router-dom';
import './index.css';
import TextArea from 'rc-textarea';

//function to update input number
function onChange(value) {
  console.log('changed', value);
}

/* //funtion for delete confirmation button
function confirm(e) {
  console.log(e);
  message.success('Game Successfully Deleted');
}

function cancel(e) {
  console.log(e);
} */


//internal component for pop out window to delete game
const Pop = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Button type="primary" danger onClick={showModal}>Delete Game</Button>
      <Modal title="Delete Game Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to delete this game?</p>
      </Modal>
    </>
  );
};



const EditGamePage = () => {
  return (
    <div>
      <div className='container1'>
        <h1>Edit Game Page</h1>
        {/* <Popconfirm 
          title='Are you sure you want to delete this game?'
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>Delete Game</Button>
        </Popconfirm> */}

        <Pop />
        
      </div>
      
      <div className='container2'>
        <Form>
          <Form.Item label="Game Name">
            <Input placeholder="Enter Game Name" />
          </Form.Item>
          <Form.Item label="Game Description">
            <TextArea placeholder="Enter Game Description" cols={40}/>
          </Form.Item>
          <Form.Item label="Number of Quizzes">
            <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
          </Form.Item>
          <Form.Item label="Number of Questions per Quiz">
            <InputNumber min={1} max={10} defaultValue={1} onChange={onChange} />
          </Form.Item>
        </Form>
      </div>

      <div className='container3'>
        <Button type="primary">
          <Link to={'/dashboard'}>Back</Link>
        </Button>
        <Button type="primary">Save Changes</Button>
      </div>
      
    </div>
  );
};

export default EditGamePage;
