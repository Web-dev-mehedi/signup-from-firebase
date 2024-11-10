
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navvar/Navbar'

function App() {


  return (
    <>
       <Navbar></Navbar>         
       <div className='min-h-screen'>
          <h1 className='bg-red-300'>hello from home</h1>
           <Outlet/>
       </div>
       <Footer></Footer>
    </>
  )
}

export default App
