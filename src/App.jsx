import React, { useState } from 'react';
import './assets/css/style.css'
import Fun from './Fun';
function App() {
  let arr=['⚡','🔥','⭐','🫡','👶🏻','🏠'];
  const [word,setword]=useState("");
  return (
    <div className='box'>
      {
        arr.map((item)=>{
          return <Fun emoji={item} /> // Added return statement
        })
      }
      <h1>{word.length}</h1>
      <input type="text" name="" id="" onChange={(e)=>setword(e.target.value)} />
    </div>
  
  )
}

export default App