import React from 'react';
import Navbar from './Navbar';
import '../BasicStyle/Quotes.css';

const Quotes = () => (
  <div>
    <Navbar />
    <div className="quote-wrapper">
      <h2 className="quote">
        Mathematics is not about numbers, equations, computations, or algorithms:
        it is about understanding. -William Paul Thurston
      </h2>
    </div>
  </div>
);

export default Quotes;
