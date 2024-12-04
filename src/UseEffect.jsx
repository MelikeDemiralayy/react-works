import React, { useState, useEffect } from 'react'

const UseEffect = () => {
 const [count, setCount] = useState(0);
 const[color,setColor] = useState("green");

 useEffect(() =>{
    document.title = `Counter Program: ${count} ${color}`

 },[count,color])

 function addCount(){
    setCount(c => c+10)
 }

 function subtractCount(){
    setCount(c => c-10)
 }

 function changeColor(){
 setColor(c => c==="green" ? "red" : "green")
 }


  return (
    <div>
      <p style={{color: color}}>{count} </p>
      <button onClick={addCount}>Add</button>
      <button onClick={subtractCount}>Subtract</button>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default UseEffect
