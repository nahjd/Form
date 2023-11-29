import React from 'react'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import ForgotPassword from './components/ForgotPassword';
import './App.css';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
          <Route index element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ForgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App