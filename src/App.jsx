import React, { useState } from 'react';
import './App.css';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['aaa', 'bbb']);
  const [completeTodos, setCompleteTodos] = useState(['ccc']);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === '') return;
    const newIncompleteTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newIncompleteTodos);
    setTodoText('');
  };
  const onClickDelete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);
  };
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setIncompleteTodos(newIncompleteTodos);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };
  return (
    <>
      <h1>ToDoApp-React</h1>
      <div id='flex-container'>
        <main id='grid-container'>
          <div id='input-area'>
            <input placeholder='TODOを入力' value={todoText} onChange={onChangeTodoText} />
            <button onClick={onClickAdd}>追加</button>
          </div>
          <div id='incomplete-area'>
            <p className='title'>未完了のTODO</p>
            <ul>
              {incompleteTodos.map((todo, index) => {
                return (
                  <li key='todo'>
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
          <div id='complete-area'>
            <p className='title'>完了したTODO</p>
            <ul>
              {completeTodos.map((todo) => {
                return (
                  <li key='todo'>
                    <div className='list-row'>
                      <p>{todo}</p>
                      <button>戻す</button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};
