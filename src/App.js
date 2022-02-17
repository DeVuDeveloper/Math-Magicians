import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Quotes from './components/Quotes';
import Calculator from './components/Calculator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quotes />} />
      </Routes>
    </Router>
  );
}

export default App;
