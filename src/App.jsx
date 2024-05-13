
import React, { useState } from 'react'
import './App.css'
import Form from './components/Form'
import Result from './components/Result';
import Calculation from './components/Calculation';

function App() {

  const [result, setResult] = useState(null);
  const [number, setNumber] = useState(null);

  const [resultTwo, setResultTwo] = useState(null);
  const [numberTwo, setNumberTwo] = useState(null);

  const handleResult = (resultado) => {
    setResult(resultado);
  }

  const handleResultTwo = (resultado) => {
    setResultTwo(resultado);
  }

  return (
    <div className="" >
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-7">Serie numérica</h1>
      <div className="mb-16">
        <Form onCalculation={(number) => setNumber(number)} />
        {result !== null && <Result result={result} />}
        {React.useMemo(() => (
          <Calculation number={number} onResult={handleResult} type={1} />
        ), [number])}

      </div>

      <div>
        <Form onCalculation={(number) => setNumberTwo(number)} />
        {resultTwo !== null && <Result result={resultTwo} />}
        {React.useMemo(() => (
          <Calculation number={numberTwo} onResult={handleResultTwo} type={2} />
        ), [numberTwo])}

      </div>
    </div>
  )
}

export default App
