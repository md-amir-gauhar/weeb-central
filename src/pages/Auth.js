import React from 'react'
import Signin from '../components/Signin'

import '../styles/Auth.css'

const Auth = () => {
  return (
    <div className='sign-in-and-sign-up flex justify-between'>
      <Signin />
    </div>
  )
}

export default Auth