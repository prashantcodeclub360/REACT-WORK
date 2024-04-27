import React from 'react'
import { useState } from 'react'


function Car() {
    const [model , setModel] = useState("Ford");
    const [year , setyear] = useState("1999");
    const [color , setcolor] = useState("red");
  return (
    <>
    <h1>Hey I have a {model} car and there color is {color} & and model year is {year}</h1>
    
    
    </>
  )
}

export default Car