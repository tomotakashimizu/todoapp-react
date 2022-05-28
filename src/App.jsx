import React from 'react';
import './App.css';

export const App = () => {
  return (
    <>
      <h1>ToDoApp-React</h1>
      <div id='flex-container'>
        <main id='grid-container'>
          <div id='input-area'>
            <input placeholder='TODOを入力' />
            <button>追加</button>
          </div>
          <div id='incomplete-area'>
            <p className='title'>未完了のTODO</p>
            <ul>
              <li>
                <div className='list-row'>
                  <p>aaa</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
              <li>
                <div className='list-row'>
                  <p>bbb</p>
                  <button>完了</button>
                  <button>削除</button>
                </div>
              </li>
            </ul>
          </div>
          <div id='complete-area'>
            <p className='title'>完了したTODO</p>
            <ul>
              <li>
                <div className='list-row'>
                  <p>ccc</p>
                  <button>戻す</button>
                </div>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
};
