import React, { useState } from 'react'
import '../styles/Auth.css'

const Signup = () => {
  const [credentials, setCredentials] = useState({ displayName: "", email: "", password: "", confirmPassword: "" })


  const [focusedDisplayName, setFocusedDisplayName] = useState(false)
  const [focusedEmail, setFocusedEmail] = useState(false)
  const [focusedPassword, setFocusedPassword] = useState(false)
  const [focusedConfirmPassword, setFocusedConfirmPassword] = useState(false)

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value })
  }


  const { displayName, email, password, confirmPassword } = credentials;
  return (
    <section className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form>
        <div className="username">
          <label
            className={`${displayName.length > 0 || focusedDisplayName ? 'shrink' : ''} label`}
          >
            Display Name
          </label>
          <input
            id="username-input"
            type="text"
            name="displayName"
            value={displayName}
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