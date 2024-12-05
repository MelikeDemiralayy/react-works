import React, { useState, useEffect, useRef } from 'react'

const UseRef = () => {
 let [number,setNumber] = useState(0);

 useEffect(() =>{
    console.log("COMPONENT RENDERED");
 })

 function handleClick(){
    setNumber(n => n+1);
 }

  return (
    <button onClick={handleClick} className='button-ref' >
        Click Me!
    </button>
  )
}

export default UseRef
