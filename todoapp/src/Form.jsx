import React, { useState } from 'react'

const Form = () => {
  let [inputvalue,setinputvalue] = useState({
    name:"",
    value:""
  })
  let [output,setoutput] = useState([])

 let inputer=(e)=>{
   let {name,value}= e.target
   setinputvalue((e)=>(
    {
      ...e,
      [name]:value
   })
  )
 }
  let btnsubmit =(e)=>{
    e.preventDefault()
    setoutput([...output,inputvalue])
    setinputvalue({ name: '', value: '' })
   
  }

  return (
    <div>
       <form onSubmit={btnsubmit}>
       <input type="text" name='name' value={inputvalue.name} onChange={inputer}/>
       <input type="text" name='value' value={inputvalue.value} onChange={inputer}/>
        <input type="submit" />
        </form>
          {
            output.map((e,i)=>(
              <div key={i} >
               <h1 >{e.name}</h1>
              <h1 >{e.value}</h1>
              </div>
             
            ))
          }
    </div>
  )
}

export default Form
