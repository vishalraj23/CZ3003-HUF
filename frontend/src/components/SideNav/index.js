import * as React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

import './index.css';

const { Sider } = Layout;

const SideNav = ({ isMenuClosed }) => {
  return (
    <Sider
      theme='light'
      trigger={null}
      collapsible
      collapsed={isMenuClosed}
      className='sider'
    >
      <div className='logo'>HUF LOGO</div>
      <Menu mode='inline' defaultSelectedKeys={['1']}>
        <Menu.Item key='1' icon={<HomeOutlined />}>
          <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item key='2' icon={<UserOutlined />}>
          <Link to='/dashboard'>Dashboard</Link>
        </Menu.Item>
        <Menu.Item key='3' icon={<SettingOutlined />}>
          <Link to='/settings'>Settings</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export { SideNav };
