import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addtodo} from './Features/TodoSlice'

const App = () => {
  let [inputvalue,setinputvalue] = useState("")

  let outputvalues = useSelector((state)=>console.log(state.todo.arr))
  let dispatch= useDispatch()

  let btnsubmit=()=>{
   dispatch(addtodo(inputvalue))
    setinputvalue('')
  }
  return (
    <div>
      <input type="text" value={inputvalue} onChange={(e)=>setinputvalue(e.target.value)}/>
      <button onClick={btnsubmit}>Add</button>
      {/* {
        outputvalues.map((e)=>(
          <h1 key={e.id}>{e.text}</h1>
        ))
            
     } */}
    </div>
  )
}

export default App
