import '../App.css';
import React from "react"

function Tugas7(props) {
    return (
      <div className="card">
        <h1>Data diri peserta kelas Reactjs</h1>
        <hr></hr>
        <ul>
            <li>
                <p><b>Nama Lengkap :</b> {props.name}</p>
            </li>
            <li>
                <p><b>Email :</b> {props.batch}</p>
            </li>
            <li>
                <p><b>Batch Pelatihan :</b> {props.email}</p>
            </li>
        </ul>
      </div>
    );
}

export default Tugas7