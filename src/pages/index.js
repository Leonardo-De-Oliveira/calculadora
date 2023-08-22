import React, { useState } from "react"
import styles from '@/styles/Home.module.css';

export default function Home() {

  const [ firstNumber, setFirstNumber ] = useState('0');
  const [ secondNumber, setSecondNumber ] = useState('');
  const [ resultado, setResultado ] = useState('');
  const [ operador, setOperador] = useState(' ');

  const resetNumber = () => {
    setFirstNumber('0');
    setSecondNumber('');
    setResultado('');
    setOperador(' ');
  };

  const handleOperador = (operador) => {
    setOperador(operador);
    if(resultado !== ''){
      setFirstNumber(resultado);
      setSecondNumber('')
    }
  };

  const entradaDados = (num) => {
    
    if(operador === ' '){
      setFirstNumber(prev => `${prev === '0' ? '' : prev}${num}`)
    }
    if(firstNumber !== '0' && operador !== ' ') {
      setSecondNumber(prev => `${prev === '' ? '' : prev}${num}`)
    }
  };
  
  const handleSomaNumeros = () => {
    setResultado(Number(firstNumber) + Number(secondNumber));
  }

  const handleSubtrairNumeros = () => {
    setResultado(firstNumber - secondNumber);
  }

  const handleMultiplicaNumeros = () => {
    setResultado(firstNumber * secondNumber);
  }

  const handleDividirNumeros = () => {
    let operacao = firstNumber / secondNumber;
    let resultado = operacao.toFixed(2);
    setResultado(resultado);
  }

  const handleEquals = () => {
    if(firstNumber !== '0' && secondNumber !== '0'&& operador !== ' ' ){
      switch(operador){
        case '+':
          handleSomaNumeros();
          break;
        case '-':
          handleSubtrairNumeros();
          break;
        case '*':
          handleMultiplicaNumeros();
          break;
        case '/':
          handleDividirNumeros();
          break;
        default:
          break;
      }
    }
  };     
    

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.display}>
          <p>{firstNumber + ' ' + operador + ' ' + secondNumber}</p>
          
          <p>{resultado}</p>

        </div>

        <div>
          <button className={styles.button} onClick={() => entradaDados(7)}>7</button>
          <button className={styles.button} onClick={() => entradaDados(8)}>8</button>
          <button className={styles.button} onClick={() => entradaDados(9)}>9</button>
          <button className={styles.button} onClick={() => handleOperador('+')}>+</button>
        </div>
        <div>
          <button className={styles.button} onClick={() => entradaDados(4)}>4</button>
          <button className={styles.button} onClick={() => entradaDados(5)}>5</button>
          <button className={styles.button} onClick={() => entradaDados(6)}>6</button>
          <button className={styles.button} onClick={() => handleOperador('-')}>-</button>
        </div>
        <div>
          <button className={styles.button} onClick={() => entradaDados(1)}>1</button>
          <button className={styles.button} onClick={() => entradaDados(2)}>2</button>
          <button className={styles.button} onClick={() => entradaDados(3)}>3</button>
          <button className={styles.button} onClick={() => handleOperador('*')}>*</button>
        </div>
        <div>
          <button className={styles.button} onClick={() => entradaDados(0)}>0</button>
          <button className={styles.button} onClick={resetNumber}>C</button>
          <button className={styles.button} onClick={handleEquals}>=</button>
          <button className={styles.button} onClick={() => handleOperador('/')}>/</button>
        </div>
      </div>
    </div>
  )
}
