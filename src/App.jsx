import React, { useState } from 'react';
import './App.css';
import { IncompleteTodos } from './components/IncompleteTodos';
import { InputTodo } from './components/InputTodo';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
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
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  return (
    <>
      <h1>ToDoApp-React</h1>
      <div id='flex-container'>
        <main id='grid-container'>
          <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd} />
          <IncompleteTodos
            incompleteTodos={incompleteTodos}
            onClickComplete={onClickComplete}
            onClickDelete={onClickDelete}
          />
          <div id='complete-area'>
            <p className='title'>完了したTODO</p>
            <ul>
              {completeTodos.map((todo, index) => {
                return (
                  <li key={todo}>
                    <div className='list-row'>
                      <p>{todo}</p>
                      <button onClick={() => onClickBack(index)}>戻す</button>
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
