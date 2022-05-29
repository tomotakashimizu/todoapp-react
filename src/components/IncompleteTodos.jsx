import PropTypes from 'prop-types';
import React from 'react';

const incompleteArea = {
  gridArea: 'incomplete',
  minHeight: '200px',
  backgroundColor: '#c6ffe2',
  padding: '8px',
  margin: '8px',
  borderRadius: '8px',
};

const title = {
  textAlign: 'center',
  marginTop: '0',
  fontWeight: 'bold',
  color: '#666',
};

const listRow = {
  display: 'flex',
  alignItems: 'center',
  paddingBottom: '4px',
};

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div style={incompleteArea}>
      <p style={title}>未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div style={listRow}>
                <p>{todo}</p>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

IncompleteTodos.propTypes = {
  incompleteTodos: PropTypes.array.isRequired,
  onClickComplete: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired,
};
