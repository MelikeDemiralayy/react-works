import React from 'react'
import ContextC from './ContextC'

const ContextB = () => { // props drilling olayında bu kısımlara da props gönderiyoruz
                        //  const ContextB = (props) => {
                      // <ContextC user ={props.user} /> .... şeklinde
  return (
    <div className='box'>
      <h1>Component B</h1>
      <ContextC  /> 
    </div>
  )
}

export default ContextB
