import React from 'react'
import SignUp from './pages/auth/SignUp.jsx'
import Login from './pages/auth/Login.jsx'
import Home from './pages/home/Home.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"


const App = () => {
  return (
      <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" exact element={<Home />} />
          </Route>

          <Route path="/login" exact element={<Login/>} />
          <Route path="/sign-up" exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>    
  )
}

export default App