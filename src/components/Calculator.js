import React, { Component } from 'react';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.calculation = this.calculation.bind(this);
  }

  componentDidMount() {
    this.setState({
      total: null,
      next: null,
      operation: null,
    });
  }

  shouldComponentUpdate() {
    return true;
  }

  calculation(event) {
    this.setState((obj) => calculate(obj, event.target.innerText));
  }

  render() {
    const { total, next, operation } = this.state;
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
      <section className="calculator-container">
        <div id="display" className="display">{ display }</div>

        <div className="numbers-container">
          <button className="clear-display" type="button" id="clear" onClick={this.calculation}>
            AC
          </button>

          <button className="plus-minus" id="pm" type="button" onClick={this.calculation}>
            +/-
          </button>

          <button className="percent" id="percents" type="button" onClick={this.calculation}>
            %
          </button>

          {numbers.map((number) => (
            <button
              type="button"
              className={`numbers ${number === 0}`}
              key={number}
              id={ids[number]}
              onClick={this.calculation}
            >
              {number}
            </button>
          ))}

          <button className="decimals" id="decimal" type="button" onClick={this.calculation}>
            .
          </button>
        </div>

        <div className="operators-container">
          {operators.map((operator) => (
            <button className="orange operators" type="button" onClick={this.calculation} key={operator} id={ids[operator]}>
              {operator}
              {' '}
            </button>
          ))}
        </div>
      </section>
    );
  }
}
export default Calculator;
