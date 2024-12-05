import React, { useState, createContext } from 'react'
import ContextB from "./ContextB"


export const UserContext = createContext();


const ContextA = () => {

    const [user,setUser] = useState("Melike")

  return (
    <div className='box'>
   <h1>Component A</h1>
   <h2>{`Hello ${user}`}</h2>
   <UserContext.Provider value={user} >
   <ContextB user = {user}/>
   </UserContext.Provider>

    </div>
  )
}

export default ContextA
