import React, { useState, useEffect, useRef } from 'react'

const UseRef = () => {
//  let [number,setNumber] = useState(0);
const ref = useRef(2);
const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);

console.log(ref);
 useEffect(() =>{
    console.log("COMPONENT RENDERED"); // her render sonrasında useEffect çalışır
    console.log(inputRef1)
  },[])

 function handleClick1(){
   //  setNumber(n => n+1);
   // ref.current = ref.current+1;
  //  ref.current++;  // buttona basınca sayıyı arttırmaya yarayan kısım
  //  console.log(ref.current)

   inputRef1.current.focus();
   inputRef1.current.style.backgroundColor = "yellow";
 }

 function handleClick2(){
  inputRef2.current.focus();
  inputRef2.current.style.backgroundColor = "orange";
}

function handleClick3(){
  inputRef3.current.focus();
  inputRef3.current.style.backgroundColor = "pink";
}


  return (
    <div>
    <button onClick={handleClick1} className='button-ref' >
        Click Me 1!
    </button>
    <input ref={inputRef1}/>

    <button onClick={handleClick2} className='button-ref' >
        Click Me 2!
    </button>
    <input ref={inputRef2}/>

    <button onClick={handleClick3} className='button-ref' >
        Click Me 3!
    </button>

    <input ref={inputRef3}/>
    </div>
    
  ) 
}

export default UseRef
