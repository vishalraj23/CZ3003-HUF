import * as React from 'react';
import { Input } from 'antd';

import './index.css';
import { SearchOutlined } from '@ant-design/icons';

const GamesPage = () => {
  const [searchStr, setSearchStr] = React.useState('');

  return (
    <div className='container'>
      <div className='header-container'>
        <h2 className='heading'>Game Time!</h2>
        <Input
          prefix={
            <SearchOutlined style={{ color: 'rgba(17, 17, 17, 0.48)' }} />
          }
          placeholder='Search'
          className='search'
          allowClear
          value={searchStr}
          onChange={(e) => setSearchStr(e.target.value)}
          onPressEnter={() => {
            console.log(searchStr);
          }}
        />
      </div>
      <div className='info-container'>
        <p className='text'>
          Hi <span className='text-highlight'>James</span>, Please select the
          game you want tot start playing!
        </p>
        <div className='card-container'></div>
      </div>
    </div>
  );
};

export default GamesPage;
