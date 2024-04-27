import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Car from './Car'
import Useeffect from './Useeffect'

function App() {
  let [data , setData] = useState("prashantcodeclub360")
  const updateData = () => {
   setData("prashant");
   alert(data);
  }

  return (
    <>
    <div className='App'>
    <h1>{data}</h1>  
      <button className='border bg-red-300 w-auto h-auto rounded text-white' onClick={updateData}>Updatevalue</button>
    </div>   
    <br />
    <Counter ></Counter>
    <br />
    <Car />
    <br />
    <Useeffect />

    </>
    
  )
}

export default App
