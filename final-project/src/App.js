import logo from './logo.svg';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Dashboard from './dashboard/dashboard.jsx';
import Job from './list-job-vacancy/job.jsx';
import Hero from './hero/hero.jsx';
import Footer from './footer/footer.jsx';
import Nav from './nav.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav/>
        <Hero/>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/dashboard/list-job-vacancy' element={<Job/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
