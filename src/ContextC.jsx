import React, { useContext } from 'react';
import { UserContext } from './ContextA.jsx';
import ContextD from './ContextD'



const ContextC = () => {

  const user = useContext(UserContext);

  return (
    <div className='box'>
      <h1>Component C</h1>
      <h2>{`Hello ${user}`} </h2>
    <ContextD  />
    </div>
  )
}

export default ContextC
