// import React from 'react'

// const Click = () => {

// let count = 0;
// const handleClick = (name) =>{
//   if(count < 5){
//     count ++;
//     console.log(`${name} you clicked me ${count} time/s`)
//   }else{
//     console.log(`${name} stop clicking me `)
//   }
// }
    
//   return (
//     <div>
//         <button onClick={() => handleClick ("Melike")}>Click🦜</button>
      
//     </div>
//   )
// }

// export default Click


import React from 'react'

const Click = () => {

    const handleClick = (e) => e.target.textContent = "Hey!🪻🌸🪼🪸";
  return (
    <div>
      <button onDoubleClick={(e) =>handleClick(e)}>Click🦜</button>
    </div>
  )
}

export default Click

