import { useState } from 'react';
import { MyTitle1 } from './MyTitle1.jsx';
import { MyTitle2 } from './MyTitle2.jsx';
import { Likes } from './Likes.jsx';

import './App.css'

function initCounter(){
  console.log('initCounter');
  return 0;
}

function App() {
  console.log('App');
  const [counter, setCounter] = useState(() => initCounter());

  function increaseCounter(){
    setCounter(previusValue => previusValue + 1);
  }

  function decreaseCounter(){
    setCounter(previusValue => previusValue - 1);
  }

  return (
    <>
    <h1>Importing titles components</h1>
    <MyTitle1 param="111"/>
    <MyTitle2 param="222"/>
    
    <hr></hr>
    
    <h1>Counter</h1>
    <div className='counter'> 
      <button onClick={increaseCounter}>+</button>
      <span>{counter}</span>
      <button onClick={decreaseCounter}>-</button>
    </div>
    </>
  )
}

export default App;


