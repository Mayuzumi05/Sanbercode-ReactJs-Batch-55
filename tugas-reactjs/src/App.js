// import logo from './logo.svg';
import './App.css';
import Tugas6 from './tugas6/tugas6.js';
import Tugas7 from './tugas7/tugas7.js';
import Tugas8 from './tugas8/tugas8.jsx';
import Tugas9 from './tugas9/tugas9.jsx';

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
      <Tugas6 />
      <Tugas7 name="Himawan Alan Novianto" batch="55" email="alannovianto11@gmail.com"/>
      <Tugas8 />
      <Tugas9 />
    </>
  );
}

export default App;
