// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import StandardContent from './components/StandardContent';
import TopicPage from './components/TopicPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/standard/:standardId" element={<StandardContent />} />
        <Route path="/standard/:standardId/:topicId" element={<TopicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
