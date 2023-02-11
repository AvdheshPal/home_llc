import React, { useContext } from 'react'
import {AuthContext} from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {

    const {token,setToken} = useContext(AuthContext)

    if(!token){
        return <Navigate to={'/login'}/>
    }

  return children;
}
