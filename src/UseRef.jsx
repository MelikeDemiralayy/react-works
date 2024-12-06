import React, { useState, useEffect, useRef } from 'react'

const UseRef = () => {
//  let [number,setNumber] = useState(0);
const ref = useRef(2);
console.log(ref);
 useEffect(() =>{
    console.log("COMPONENT RENDERED"); // her render sonrasında useEffect çalışır
 },[])

 function handleClick(){
   //  setNumber(n => n+1);
   // ref.current = ref.current+1;
   ref.current++;
   console.log(ref.current)
 }

  return (
    <button onClick={handleClick} className='button-ref' >
        Click Me!
    </button>
  ) 
}

export default UseRef
