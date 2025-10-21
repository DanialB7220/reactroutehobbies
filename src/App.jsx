import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import Hobbies from './pages/Hobbies';
import HobbyDetail from './pages/HobbyDetail';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Container fluid className="mt-4 px-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/hobby/:id" element={<HobbyDetail />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
};

export default App;