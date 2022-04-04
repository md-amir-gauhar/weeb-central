import React, { useState } from 'react'
import axios from 'axios'
import { setAuthData } from '../utils/authUtil'
import { useAuth } from '../context/AuthContext'

import '../styles/Auth.css'



const Signin = () => {
  const { dispatch,} = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [focusedInput, setFocusedInput] = useState(false)
  const [focusedPassword, setFocusedPassword] = useState(false)

  const sendReq = async (body) => {
    try {
      const response = await axios.post('/api/auth/login', body);
      setAuthData(response.data.encodedToken);
      return response.data.encodedToken;
    } catch (err) {
      if (err.response.status === 422) {
        console.log("user exists")
      }
    }
  }

  const submitHandler = (e) => {
    sendReq({
      email,
      password
    }).then(res => {
      dispatch({
        type: "LOGGED_IN",
        payload: res === undefined ? null : res
      })
    })
    e.preventDefault()
  }

  return (
    <section className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={submitHandler}>
        <div className="email">
          <label className={`${email.length > 0 || focusedInput ? 'shrink' : ''} label`}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            onFocus={() => setFocusedInput(true)}
            onBlur={() => setFocusedInput(false)}
          />
        </div>
        <div className="password">
          <label className={`${password.length > 0 || focusedPassword ? 'shrink' : ''} label`}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            onFocus={() => setFocusedPassword(true)}
            onBlur={() => setFocusedPassword(false)}
          />
        </div>
        <div className="auth-buttons flex align-center justify-between">
          <button className='flex align-center justify-center'>Sign In</button>
          <button className="google-sign-in flex align-center justify-center">Sign In with Google</button>
        </div>
      </form>
    </section>
  )
}

export default Signin