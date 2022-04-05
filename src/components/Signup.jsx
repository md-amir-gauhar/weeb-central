import axios from 'axios'
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { setAuthData } from '../utils/authUtil'
import { useAuth } from '../context/AuthContext'
import { passwordDidNotMatch, userAlreadyExists } from '../utils/toasts'

import '../styles/Auth.css'

const Signup = () => {
  const { dispatch } = useAuth()
  const [credentials, setCredentials] = useState({ username: "", email: "", password: "", confirmPassword: "" })


  const [goto, setGoto] = useState(false);
  const [focusedDisplayName, setFocusedDisplayName] = useState(false)
  const [focusedEmail, setFocusedEmail] = useState(false)
  const [focusedPassword, setFocusedPassword] = useState(false)
  const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false)

  const { username, email, password, confirmPassword } = credentials;

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value })
  }

  const sendReq = async (body) => {
    try {
      const response = await axios.post('/api/auth/signup', body);
      console.log(response.data);
      setAuthData(response.data.encodedToken);
      return response.data.encodedToken;
    } catch (error) {
      if (error.response.status === 422) {
        userAlreadyExists()
      }
    }
  }

  const submitHandler = (e) => {
    if (password === confirmPassword) {
      sendReq({
        username,
        email,
        password,
      }).then((res) => {
        dispatch({
          type: 'SIGNED_UP',
          payload: res === undefined ? null : res,
        });
        setGoto(res === undefined ? false : true);
      });
      setCredentials({
        ...credentials,
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      passwordDidNotMatch()
      setCredentials({ ...credentials, password: '', confirmPassword: '' });
    }
    e.preventDefault();
  };

  if (goto) {
    return <Navigate to='/' />;
  }


  return (
    <section className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={submitHandler}>
        <div className="username">
          <label
            className={`${username.length > 0 || focusedDisplayName ? 'shrink' : ''} label`}
          >
            Display Name
          </label>
          <input
            id="username-input"
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            onFocus={() => setFocusedDisplayName(true)}
            onBlur={() => setFocusedDisplayName(false)}
          />
        </div>

        <div className="email">
          <label
            className={`${email.length > 0 || focusedEmail ? 'shrink' : ''} label`}
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            onFocus={() => setFocusedEmail(true)}
            onBlur={() => setFocusedEmail(false)}
          />
        </div>
        <div className="password">
          <label
            className={`${password.length > 0 || focusedPassword ? 'shrink' : ''} label`}
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            onFocus={() => setFocusedPassword(true)}
            onBlur={() => setFocusedPassword(false)}
          />
        </div>
        <div className="confirm-password">
          <label
            className={`${confirmPassword.length > 0 || focusedConfirmPassword ? 'shrink' : ''} label`}
          >
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            onFocus={() => setFocusedConfirmPassword(true)}
            onBlur={() => setFocusedConfirmPassword(false)}
          />
        </div>
        <div className="auth-buttons">
          <button className='flex align-center justify-center'>Sign up</button>
        </div>
      </form>
    </section>
  )
}

export default Signup