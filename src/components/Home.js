/* eslint-disable max-len */
import React from 'react';
import '../BasicStyle/Home.css';
import Navbar from './Navbar';

const Home = () => (
  <div>
    <Navbar />
    <div className="home">
      <h1>Welcome to my page !</h1>

      <p>Hi, This site is intended for enthusiastic mathematicians.</p>
      <p>This is a Single Page Application made with React.</p>
      <p>Initially used classes, refactored with hooks and used router to display multiple pages.</p>
    </div>
  </div>
);

export default Home;
