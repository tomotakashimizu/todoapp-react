import PropTypes from 'prop-types';
import React from 'react';

export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComplete, onClickDelete } = props;
  return (
    <div id='incomplete-area'>
      <p className='title'>未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => {
          return (
            <li key={todo}>
              <div className='list-row'>
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
