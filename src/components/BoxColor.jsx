import { useState, useEffect, useRef } from "react";


function BoxColor ({color, value}) {
  const boxRef= useRef (null)
  const [classList, setClassList] = useState('')

  //CSS en línea
  const boxCSS = {
    backgroundColor: classList.value === `box ${value}` ? color : null,
    border: `1px solid ${color}`,
    color: `${color}`
  }

  useEffect(()=>{
    setClassList(boxRef.current.classList)
  }, [value])

  return (
    <>
    <div
    className={`box ${color}`}
    style={boxCSS}
    ref={boxRef}
    >
    {color === value ? <p style={{color:'black'}}> Yes, I'm a {value} color</p> : <p>I´m not a {value} color</p>}
    </div>
    </> 
  )

}
export default BoxColor;  
