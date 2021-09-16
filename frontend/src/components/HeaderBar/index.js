import * as React from 'react';
import { Layout } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import './index.css';

const { Header } = Layout;

const HeaderBar = ({ menuOnClick }) => {
  return (
    <Header className='header' style={{ padding: 0 }}>
      <div className='menu-trigger' onClick={menuOnClick}>
        <MenuOutlined />
      </div>
    </Header>
  );
};

export { HeaderBar };
