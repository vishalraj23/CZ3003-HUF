import * as React from 'react';
import { Layout, Avatar, Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

import './index.css';

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item key='profile'>My Profile</Menu.Item>
    <Menu.Item key='settings'>
      <Link to='/settings'>Settings</Link>
    </Menu.Item>
    <Menu.Item key='logout'>Log Out</Menu.Item>
  </Menu>
);

const HeaderBar = ({ menuOnClick }) => {
  return (
    <Header className='header' style={{ padding: 0 }}>
      <div className='menu-trigger' onClick={menuOnClick}>
        <MenuOutlined />
      </div>
      <div className='avatar-container'>
        <Dropdown overlay={menu} placement='bottomLeft' arrow>
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>
            U
          </Avatar>
        </Dropdown>
      </div>
    </Header>
  );
};

export { HeaderBar };
