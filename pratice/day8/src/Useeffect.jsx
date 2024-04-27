import React from 'react'
import { useEffect , useState } from 'react'

function Useeffect() {
    const [ count , setCount] = useState(0);

    useEffect(() => {
        console.log("useEffect hook")
        console.log("updating")
    });
    
  return (
   <>
   <div className="App">
    <h1>Use Effet hook</h1>
    <h2>Count:{count}</h2>
    <button type="button" className=' w-auto bg-red-500 rounded text-white ' onClick={() => setCount(count+ 1)}>Update Value</button>

   </div>
   
   
   </>
  )
}

export default Useeffect