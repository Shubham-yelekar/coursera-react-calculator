import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useRef } from 'react';

function App() {
  
  const [result, setResult] = useState(0);
  const inputRef = useRef();
  const resultRef = useRef();


  const btnAddClick = () => {
    setResult(result => result + Number(inputRef.current.value));
    
  }

  const btnSubClick = () => {
    setResult(result => result - Number(inputRef.current.value));
  }

  const btnMulClick = () => {
    setResult(result => result * Number(inputRef.current.value));
  }

  const btnDivClick = () => {
    setResult(result => result / Number(inputRef.current.value));
  }

  const btnResetInput = () => {
    inputRef.current.value = 0;
  }

  const btnResetResult = () => {
    resultRef.current.value = 0;
    setResult(0);
  }

  return (
    <div className="App">

      <h1>Simplest Working Calculator</h1>

      <label className="result" ref={resultRef} >
        {result}
      </label>

      <br />

      <input 
        ref={inputRef}
        type="number" 
        placeholder="Enter value..."
      />

      <div className="container">
        <button onClick={btnAddClick}>add</button>
        <button onClick={btnSubClick}>subtract</button>
        <button onClick={btnMulClick}>multiply</button>
        <button onClick={btnDivClick}>divide</button>
        <button onClick={btnResetInput}>reset input</button>
        <button onClick={btnResetResult}>reset result</button>
      </div>

    </div>

  );
}

export default App
