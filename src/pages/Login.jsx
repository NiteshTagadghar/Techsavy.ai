import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { mockAuthenticate } from '../services/authService'
import styles from './Login.module.css'

const Login = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await mockAuthenticate(username, password)
      localStorage.setItem('authToken', `mock-token/${username}/${password}`)
      navigate('/main')
    } catch (err) {
      setError('Invalid credentials')
    }
  }

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.loginFormH2}>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={styles.loginFormInput}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={styles.loginFormInput}
        />
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit" className={styles.loginFormButton}>Login</button>
      </form>
    </div>
  )
}

export default Login
