import React from 'react'
import '../App.css';
import { useState } from "react";

function Tugas8() {

  const [number, setNumber] = useState(1);

  const handleNumber = () => {
    setNumber(number+1)
  }

  return (
    <div className='card'>
      { number > 10 ? <p style={{textAlign:'center'}}>State count sudah lebih dari 10!!</p> : <p style={{textAlign:'center'}}>{number}</p>}
      <button onClick={handleNumber} className='btn-tambah'>Tambah</button>
    </div>
  )
}

export default Tugas8