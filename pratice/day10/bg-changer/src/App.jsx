import React from 'react'
import { useState } from 'react'


function App() {
  const [color, setColor] = useState("white")



  return (
    <>
    <div className="conatiner w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="sidebar w-44 h-screen fixed bg-slate-800 pl-3 pt-32 " >
        <div className="color-bar w-36 h-12 mt-5 text-white font-bold">
          <button onClick={() => setColor("red")} className='outline-none px-4 w-full py-3 rounded-full capitalize bg-red-600 '>red</button>
        </div>
        <div className="color-bar w-36 h-12 mt-5 text-white font-bold">
          <button onClick={() => setColor("blue")} className='outline-none px-4 w-full py-3 rounded-full capitalize bg-blue-600'>Blue</button>
        </div>
        <div className="color-bar w-36 h-12 mt-5 text-white font-bold">
          <button onClick={() => setColor("yellow")} className='outline-none px-4 w-full py-3 rounded-full capitalize bg-yellow-500'>Yellow</button>
        </div>
        <div onClick={() => setColor("violet")} className="color-bar w-36 h-12 mt-5 text-white font-bold">
          <button className='outline-none px-4 w-full py-3 rounded-full capitalize bg-violet-500 '>violet</button>
        </div>
      </div>
       <div className="sidebar w-44 h-screen fixed bg-slate-800 pl-3 pt-32 " >
        <div className="color-bar w-36 h-12 mt-5 text-white font-bold">
          <button onClick={() => setColor("red")} className='outline-none px-4 w-full py-3 rounded-full capitalize bg-red-600 '>red</button>
        </div>
        <div className="color-bar w-36 h-12 mt-5 text-white font-bold">
          <button onClick={() => setColor("blue")} className='outline-none px-4 w-full py-3 rounded-full capitalize bg-blue-600'>Blue</button>
        </div>
        <div className="color-bar w-36 h-12 mt-5 text-white font-bold">
          <button onClick={() => setColor("yellow")} className='outline-none px-4 w-full py-3 rounded-full capitalize bg-yellow-500'>Yellow</button>
        </div>
        <div onClick={() => setColor("violet")} className="color-bar w-36 h-12 mt-5 text-white font-bold">
          <button className='outline-none px-4 w-full py-3 rounded-full capitalize bg-violet-500 '>violet</button>
        </div>
        <div className="color-bar w-36 h-12 mt-5 text-white font-bold">
          <button onClick={() => setColor("green")} className='outline-none px-4 w-full py-3 rounded-full capitalize bg-green-600 '>green</button>
        </div>
        <div className="color-bar w-36 h-12 mt-5 text-white font-bold">
          <button onClick={() => setColor("pink")} className='outline-none px-4 w-full py-3 rounded-full capitalize bg-pink-600'>Blue</button>
        </div>
      </div>
  
    </div>
   
    
    
    
    
    </>
  )
}

export default App