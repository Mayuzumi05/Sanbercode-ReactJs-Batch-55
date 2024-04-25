import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './home/home.jsx';
import ManageData from './manage-data/managedata.jsx';
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
          <Route path='/' element={<Home/>} />
          <Route path='/manage-data' element={<ManageData/>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
