// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Tugas6 from './tugas6/tugas6.js';
import Tugas7 from './tugas7/tugas7.js';
import Tugas8 from './tugas8/tugas8.jsx';
import Tugas9 from './tugas9/tugas9.jsx';
import Tugas10 from './tugas10/tugas10.jsx';
import Tugas11 from './tugas11/tugas11.jsx';
import Navbar from './navbar.jsx';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Tugas6/>} />
          <Route path='/tugas7' element={<Tugas7 name="Himawan Alan Novianto" batch="55" email="alannovianto11@gmail.com"/>}  />
          <Route path='/tugas8' element={<Tugas8/>} />
          <Route path='/tugas9' element={<Tugas9/>} />
          <Route path='/tugas10' element={<Tugas10/>} />
          <Route path='/tugas11' element={<Tugas11/>} />
        </Routes>
      </BrowserRouter>
      {/* <Tugas6 />
      <Tugas7 name="Himawan Alan Novianto" batch="55" email="alannovianto11@gmail.com"/>
      <Tugas8 />
      <Tugas9 />
      <Tugas10 />
      <Tugas11 /> */}
    </>
  );
}

export default App;
