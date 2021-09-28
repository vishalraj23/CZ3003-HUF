import * as React from 'react';
import { useState } from 'react';
import { Button, Input, InputNumber, Form, Modal} from 'antd';
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
  message.success('Quiz Successfully Deleted');
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
      <Button type="primary" danger onClick={showModal}>Delete Quiz</Button>
      <Modal title="Delete Quiz Confirmation" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Are you sure you want to delete this quiz?</p>
      </Modal>
    </>
  );
};

const EditQuizPage = () => {
  return (
    <div>
      <div className='container1'>
        <h1>Edit Quiz Page</h1>
        {/* <Popconfirm 
          title='Are you sure you want to delete this quiz?'
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>Delete Quiz</Button>
        </Popconfirm> */}
        <Pop />
      </div>

      <div className='container2'>
        <Form>
          <Form.Item label="Quiz Description">
            <TextArea placeholder="Enter Quiz Description" cols={40}/>
          </Form.Item>
          <Form.Item label="Quiz Duration (mins)">
            <InputNumber min={1} max={30} defaultValue={1} onChange={onChange} />
          </Form.Item>
          <Form.Item label="Question 1">
            <Input placeholder="Enter Question" />
          </Form.Item>
          <Form.Item label="Option 1">
            <Input />
          </Form.Item>
          <Form.Item label="Option 2">
            <Input />
          </Form.Item>
          <Form.Item label="Option 3">
            <Input />
          </Form.Item>
          <Form.Item label="Option 4">
            <Input />
          </Form.Item>
        </Form>
      </div>
      
      <div>
        <Button type="primary">
          <Link to={'/dashboard'}>Back</Link>
        </Button>
        <Button type="primary">Save Changes</Button>
      </div>

    </div>

  );
};

export default EditQuizPage;
