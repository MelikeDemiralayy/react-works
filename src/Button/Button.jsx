// import React from 'react'
// import styles from './Button.module.css'

// const Button = () => {
//   return (
//     <button className='button'>
//         Click me
//     </button>
//   )
// }

// export default Button  // module.css yazarken kullandığım kısımlar


import React from 'react'

const styles = {
  backgroundColor: "#72a4f5",
  color: "white",
  border: "2px solid #2f599c" ,
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
}

const Button = () => {
  return (
    <button style={styles}>
      Click me
    </button>
  )
}

export default Button
