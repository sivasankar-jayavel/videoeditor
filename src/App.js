import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './sb-admin-2.min.css';
import Portal from './Portal';
import Dashboard from './Dashboard';
import Button from './Button';
import Login from './Login';
import Videos from './Videos';

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
        <Route path="/Portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="button" element={<Button/>} />
          <Route path="videos" element={<Videos/>} />
        </Route>      
    </Routes>
   </BrowserRouter>
  )
}

export default App


























 

  