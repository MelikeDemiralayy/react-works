import React, { useState, useEffect } from 'react'

const UseEffectTwo = () => {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize",handleResize);
        console.log("EVENT LİSTENER ADDED");

        return() =>{
            window.removeEventListener("resize", handleResize);
            console.log( "EVENT LİSTENER REMOVED")
        }
    }, [])


    useEffect(() =>{
        document.title = `Size: ${width} X ${height}`
    },[width,height])

   
    
     function handleResize(){
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
   }

  return (
    <div>
      <p>Window Width:{width}px </p>
      <p>Window Height:{height}px </p>
      
    </div>
  )
}

export default UseEffectTwo

