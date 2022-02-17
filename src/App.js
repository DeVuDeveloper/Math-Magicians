import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quote from './components/Quotes';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculator />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </div>
);

export default App;
