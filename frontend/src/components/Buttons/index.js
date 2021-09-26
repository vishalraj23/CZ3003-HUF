import * as React from 'react';
import { Button } from 'antd';

import './index.css';

const Buttons = ({ btnName }) => {
  return <Button type="primary">{btnName}</Button>;
};

Buttons.defaultProps = {
    btnName: 'Click Me',
}


export { Buttons };