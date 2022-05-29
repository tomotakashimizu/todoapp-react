import PropTypes from 'prop-types';
import React from 'react';

const completeArea = {
  gridArea: 'complete',
  minHeight: '200px',
  backgroundColor: '#ffffe0',
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

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div style={completeArea}>
      <p style={title}>完了したTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div style={listRow}>
                <p>{todo}</p>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

CompleteTodos.propTypes = {
  completeTodos: PropTypes.array.isRequired,
  onClickBack: PropTypes.func.isRequired,
};
