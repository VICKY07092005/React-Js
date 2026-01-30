import React, { useState } from 'react'

export default function App() {
  const[color,setcolor]=useState("white")
  return (
    <div>
      <h1>Color-Picker</h1>
      <button onClick={()=>setcolor("red")}>Red</button>
      <button  onClick={()=>setcolor("blue")}>Blue</button>
      <button  onClick={()=>setcolor("green")}>Green</button>
      <div className='bgchange' style={{backgroundColor:color}}></div>
    </div>
  )
}
