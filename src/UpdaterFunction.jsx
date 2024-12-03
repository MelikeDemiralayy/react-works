import React,  {useState} from 'react'

const UpdaterFunction = () => {
    const [count, setCount] = useState(0);

    function increment(){
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // ne kadar fazla çağırmış olsa da count burada eski değeri aldığı için güncel değeri almamış olur
        setCount((prevCount) => prevCount+1)
        setCount((prevCount) => prevCount+1)
        setCount((prevCount) => prevCount+1)
    
    }

    function decrement(){
        // setCount(count-1);
        setCount((prevCount) => prevCount-1);
        setCount((prevCount) => prevCount-1);
    } 


    function reset(){
        setCount(0);
    }
  return (
    <div>
        <p>{count}</p>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UpdaterFunction
