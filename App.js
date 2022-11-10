import Signin  from './Signin'
import React from 'react'
import Signup from './Signup'
import { BrowserRouter,Routes,Route,Link}from 'react-router-dom';  
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
