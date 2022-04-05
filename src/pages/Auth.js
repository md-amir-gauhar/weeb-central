import React from 'react'
import Signin from '../components/Signin'
import Signup from '../components/Signup'

import '../styles/Auth.css'

const Auth = () => {
  return (
    <div className='sign-in-and-sign-up flex justify-between'>
      <Signin />
      <Signup />
    </div>
  )
}

export default Auth