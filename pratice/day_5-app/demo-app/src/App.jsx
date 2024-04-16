import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import card_01 from './component/card_01'
import card_2 from './component/card_2'
function App() {
  return (
    <>
    <section className='mx-auto justify-evenly items-center'>
    <CardA />
    <CardB />
    </section>   
    </>
  )
}

export default App
