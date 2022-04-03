import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({ children }) => {
  const { isUser } = useAuth()
  return isUser ? children : <Navigate to="/auth" />
}

export default PrivateRoute