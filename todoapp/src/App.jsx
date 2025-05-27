import React, { useRef, useState } from 'react'

const App = () => {
  
  let present= useRef(null)
  
  let inc=()=>{
    console.log(present)
    present.current.focus()
  }
  
  return (
    <div>
     <input type="text" ref={present}/>
     <button onClick={inc}>click</button>
    </div>
  )
}

export default App
