import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Main from './pages/Main';
import News from './pages/News';
import CheckList from './pages/CheckList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Main />} />
          <Route path="/news" element={<News />} />
          <Route path="/checkList" element={<CheckList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
