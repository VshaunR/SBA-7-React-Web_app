
import {Routes,Route} from  'react-router-dom'
import Home from './pages/Home';
import Nav from './componenets/Nav';

import CardPage from './componenets/CardPage';
import Search from './pages/Search';
import './App.css'

function App() {

 
  return (
    <div className='container'>

      <Nav/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/cardPage/:id'element={<CardPage/>}/>
      
        <Route path='/search' element={<Search/>}/>

      </Routes>
    </div>
  )
}

export default App
