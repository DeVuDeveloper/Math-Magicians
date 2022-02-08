import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
  const operators = ["÷", "*", "-", "+"];

  const ids = {
    7: "seven",
    8: "eight",
    9: "nine",
    4: "four",
    5: "five",
    6: "six",
    1: "one",
    2: "two",
    3: "three",
    0: "zero",
    "/": "divide",
    "*": "multiply",
    "-": "subtract",
    "+": "add",
  };

  return (
    <section className="calculator-container">
      <div id="display" className="display">0</div>

      <div className="numbers-container">
        <button className="clear-display" id="clear">
          AC
        </button>

        <button className="plus-minus" id="pm">
         +/-
        </button>

        <button className="percent" id="percents">
         %
        </button>

         {numbers.map((number) => (
          <button
            className={`numbers ${number === 0}`}
            key={number}
            id={ids[number]}
          >
            {number}
          </button>
        ))} 

        <button className="decimals" id="decimal">
          .
        </button>
      </div>

      <div className="operators-container">
        {operators.map((operator) => (
          <button className="orange operators" key={operator} id={ids[operator]}>
            {operator}{" "}
          </button>
        ))}
        <button className="orange" id="equals">
          =
        </button>
      </div>
    </section>
  );
 }
}
export default Calculator;