import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

//This is allows to stop users to go on Home page and redirect to login page if the user has not in server or login properly

const PrivateRoute = () => {
   
    const { currentUser } = useSelector((state) => state.user)

    return currentUser ? <Outlet /> : <Navigate to={"/login"} />
    
  
}

export default PrivateRoute