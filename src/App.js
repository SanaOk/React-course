import React, {useState} from 'react';
import './App.css';
import Button from './components/Button/index';
import Input from './components/Input/index';

export default function App() {
    const [minNumber, setMinNumber] = useState(0);
    const [maxNumber, setMaxNumber] = useState(0);
    const [number, setNumber] = useState(0);

  return (
    <div className="App">
      <div className="result">Random number: {number}</div>
      <div className='inputs'>
          <div>
              <div>Min:</div>
              <Input name='min-number' className='min-number' value={minNumber} onChange={e => setMinNumber(Number(e.target.value))}/>
          </div>
          <div>
              <div>Max:</div>
              <Input name='max-number' className='max-number' value={maxNumber} onChange={e => setMaxNumber(Number(e.target.value))}/>
          </div>
      </div>
      <Button onClick={()=>setNumber( Math.round(minNumber + (Math.random() * (maxNumber - minNumber))))}/>
    </div>
  );
}