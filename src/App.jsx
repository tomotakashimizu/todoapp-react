import React, { useState } from 'react';
import './App.css';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState(['aaa', 'bbb']);
  // eslint-disable-next-line no-unused-vars
  const [completeTodos, setCompleteTodos] = useState(['ccc']);
  const onChangeTodoText = (event) => setTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === '') return;
    const newIncompleteTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newIncompleteTodos);
    setTodoText('');
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
              {incompleteTodos.map((todo) => {
                return (
                  <li key='todo'>
                    <div className='list-row'>
                      <p>{todo}</p>
                      <button>完了</button>
                      <button>削除</button>
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
