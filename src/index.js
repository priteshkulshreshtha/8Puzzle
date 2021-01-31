import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Game from './Game';



ReactDOM.render(
  <div>
    <h1 className='greet'>Try and solve the puzzle</h1>
    <Game />
  </div>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
