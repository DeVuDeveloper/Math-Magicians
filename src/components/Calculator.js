import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Navbar from './Navbar';
import '../BasicStyle/Calculator.css';

const Calculator = () => {
  const [obj, SetState] = useState({});
  const calculation = (e) => {
    SetState(calculate(obj, e.target.innerText));
  };

  const { total, next, operation } = obj;
  const display = next || operation || total || 0;

  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operators = ['÷', 'x', '-', '+', '='];
  const ids = {
    7: 'seven',
    8: 'eight',
    9: 'nine',
    4: 'four',
    5: 'five',
    6: 'six',
    1: 'one',
    2: 'two',
    3: 'three',
    0: 'zero',
    '/': 'divide',
    '*': 'multiply',
    '-': 'subtract',
    '+': 'add',
  };

  return (
    <main>
      <Navbar />
      <div className="calculator-wrapper">
        <div className="title">
          <h1>Let&apos;s do some math!</h1>
        </div>
        <section className="calculator-container">
          <div
            id="display"
            className="display"
          >
            { display }
          </div>

          <div className="numbers-container">
            <button
              className="clear-display"
              type="button"
              id="clear"
              onClick={calculation}
            >
              AC
            </button>

            <button
              className="plus-minus"
              id="pm"
              type="button"
              onClick={calculation}
            >
              +/-
            </button>

            <button
              className="percent"
              id="percents"
              type="button"
              onClick={calculation}
            >
              %
            </button>

            {
            numbers.map((number) => (
              <button
                type="button"
                className={`numbers ${number === 0}`}
                key={number}
                id={ids[number]}
                onClick={calculation}
              >
                { number }
              </button>
            ))
        }

            <button
              className="decimals"
              id="decimal"
              type="button"
              onClick={calculation}
            >
              .
            </button>
          </div>

          <div className="operators-container">
            {
            operators.map((operator) => (
              <button
                className="orange operators"
                type="button"
                onClick={calculation}
                key={operator}
                id={ids[operator]}
              >
                { operator }
              </button>
            ))
        }
          </div>
        </section>
      </div>
    </main>
  );
};

export default Calculator;
