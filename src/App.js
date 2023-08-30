import React from 'react';
import {BrowserRouter as Router, Routes ,Route} from "react-router-dom";
import Header from './components/Header.jsx'
import Exchange from './components/Exchange'
import Coins from './components/Coins'
import Coindetails from './components/Coindetails'
import Home from './components/Home'


function App() {
  return (
    <>
    <Router>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/exchanges' element={<Exchange/>} />
        <Route path='/coins' element={<Coins/>} />
        <Route path='/coin/:id' element={<Coindetails/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
