import PropTypes from 'prop-types';
import React from 'react';

const style = {
  gridArea: 'input',
  height: '30px',
  textAlign: 'center',
  backgroundColor: '#c1ffff',
  borderRadius: '8px',
  padding: '8px',
  margin: '8px',
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input placeholder='TODOを入力' value={todoText} onChange={onChange} disabled={disabled} />
      <button onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};

InputTodo.propTypes = {
  todoText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
};
