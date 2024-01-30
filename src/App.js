import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Main from './pages/Main';
import Info from './pages/Info';
import News from './pages/News';
import CheckList from './pages/CheckList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/main" element={<Main />} />
          <Route path="/info" element={<Info />} />
          <Route path="/news" element={<News />} />
          <Route path="/checkList" element={<CheckList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
