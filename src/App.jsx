import { useState ,useEffect} from 'react';
import {Routes,Route} from  'react-router-dom'
import Home from './pages/Home';
import Nav from './componenets/Nav';
import About from './pages/About';
import  Contact   from './pages/Contact';
import CardPage from './componenets/CardPage';
import './App.css'

function App() {




  return (
    <div className='container'>
    
      <Nav/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/cardPage/:id'element={<CardPage/>}/>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>}/>

      </Routes>
    </div>
  )
}

export default App
