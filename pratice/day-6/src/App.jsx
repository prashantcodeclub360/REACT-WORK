import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Card from './component/Card'
import Navbar from './component/Navbar'
import Product from './component/Product'
import Cartitems from './component/Cartitems'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>  
    <header>
      <Navbar Logotitle = "My Shop" BtnText={"Shop Now"} />
    </header>
        <section className='flex mt-5 justify-evenly items-center'>
            {/* <Card username = "prashant arela" parText = {"hiii this is prashant i am a full stack devloper"} btnText={"view"} />
            <Card username= {"hitesh"} parText={"hii this is hitesh i am a mern stack devloper"} btnText={"check me"} />
             */}
             <Product />
        </section>
        <main className='mt-5 flex gap-5 '>
          <Cartitems ImgSrc = "https://images.unsplash.com/photo-1588099768531-a72d4a198538?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwxMTM4MTU1NXx8ZW58MHx8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          ItemName = "Nike royalchamp 892" 
          ItemAbout = {"this is shoes is wear by all cricketer"} />
          <Cartitems ImgSrc={"https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg"} 
          ItemName = "Nike pink suep 08382" 
          ItemAbout = {"this is shoes is wear by all celibrites"} />
          
          <Cartitems ImgSrc={"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D"}
          ItemName = "Nike valvet royal 8323" 
          ItemAbout = {"this is shoes is wear by all Athlete"} />
          
          
          <Cartitems ImgSrc={"https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2hvZXN8ZW58MHx8MHx8fDA%3D"}
          ItemName = "Nike Royal brown 2392" 
          ItemAbout = {"this is shoes is wear by all politician"} />
          
         
        </main>
        <footer className='mt-5'>
        <Footer />
        </footer>
    </>
  )
}

export default App
