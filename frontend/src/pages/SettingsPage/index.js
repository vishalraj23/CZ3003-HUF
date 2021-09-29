import * as React from 'react';
import { Tag, Input, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import './index.css';

const SettingsPage = () => {
  const [tags, setTags] = React.useState(['Unremovable', 'Tag 2', 'Tag 3']);
  const [inputValue, setInputValue] = React.useState('');
  const [inputVisible, setInputVisible] = React.useState(false);
  const [editInputIndex, setEditInputIndex] = React.useState(-1);
  const [editInputValue, setEditInputValue] = React.useState('');
  const inputRef = React.useRef();
  const saveEditInputRef = React.useRef();

  const showInput = () => {
    setInputVisible(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    });
  };

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleEditInputChange = (value) => {
    setEditInputValue(value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputValue('');
    setInputVisible(false);
  };

  const handleEditInputConfirm = () => {
    const newTags = [...tags];
    newTags[editInputIndex] = editInputValue;
    setTags(newTags);
    setEditInputIndex(-1);
    setEditInputValue('');
  };

  const handleClose = (removeTag) => {
    const newTags = tags.filter((tag) => tag !== removeTag);
    setTags(newTags);
  };

  return (
    <div className='container'>
      <h1>Settings Page</h1>

      <div>
        {tags.map((tag, index) => {
          if (editInputIndex === index) {
            return (
              <Input
                ref={saveEditInputRef}
                key={tag}
                size='small'
                className='tag-input'
                value={editInputValue}
                onChange={(e) => handleEditInputChange(e.target.value)}
                onBlur={handleEditInputConfirm}
                onPressEnter={handleEditInputConfirm}
              />
            );
          }
          const isLongTag = tag.length > 20;

          const tagElem = (
            <Tag
              className='edit-tag'
              key={tag}
              closable={index !== 0}
              onClose={() => handleClose(tag)}
            >
              <span
                onDoubleClick={(e) => {
                  if (index !== 0) {
                    setEditInputIndex(index);
                    setEditInputValue(tag);
                    setTimeout(() => {
                      if (saveEditInputRef.current) {
                        saveEditInputRef.current.focus();
                      }
                    });
                    e.preventDefault();
                  }
                }}
              >
                {isLongTag ? `${tag.slice(0, 20)}...` : tag}
              </span>
            </Tag>
          );
          return isLongTag ? (
            <Tooltip title={tag} key={tag}>
              {tagElem}
            </Tooltip>
          ) : (
            tagElem
          );
        })}

        {inputVisible && (
          <Input
            ref={inputRef}
            type='text'
            size='small'
            className='tag-input'
            value={inputValue}
            onChange={(e) => handleInputChange(e.target.value)}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Tag className='site-tag-plus' onClick={showInput}>
            <PlusOutlined /> New Tag
          </Tag>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
