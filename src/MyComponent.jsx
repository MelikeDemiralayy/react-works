import React,{useState} from 'react';

const MyComponent = () => {

const [name,setName] = useState("Melike");
const [age,setAge] = useState(0);
const [isEmployed, setIsEmployed] = useState(false);

const updateName = () =>{
  setName("Melike İrem");
}

const incrementAge = () =>{
  setAge(age+2);
}

const toogleEmployedStatus = () =>{
  setIsEmployed(!isEmployed)
}
  return (
    <div>
      <p>Name:{name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Set Age</button>

     <p>Is Employed: {isEmployed ? "Yes":"No"}</p>
    <button onClick={toogleEmployedStatus}>Toogle Status</button>
    </div>
  )
}

export default MyComponent
