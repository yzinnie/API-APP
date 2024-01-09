import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect } from 'react';
import Home from './pages/Home';
import Order from './pages/Order';
import Complete from './pages/Complete';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/complete" element={<Complete />} />
          <Route path="/error" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
