import React from 'react'

const Data = async() => {
  try {
     let apihit = await fetch('https://dummyjson.com/products')
     let data = await apihit.json()
     console.log(data)
     return data.products
  } catch (error) {
      console.log(error)
  }
}

export default Data