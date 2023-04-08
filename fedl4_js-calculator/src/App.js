import './App.css';
import { useRef, useEffect } from 'react';
import { FaFreeCodeCamp } from 'react-icons/fa';

import { keys } from './engine/data';

function App() {
  return (
    <div id="calculator">
        <span id="title"><FaFreeCodeCamp />Calculator</span>
        <div id='display'>0</div>
        <ul id="keyboard">
          {keys.map((key) => {
            return <li id={key.id} className={key.id === 'equals' ? 'btn-tall' : key.id === 'zero' ? 'btn-wide' : null}><button>{key.value}</button></li>
          })}
        </ul>
    </div>
  );
}

export default App;
