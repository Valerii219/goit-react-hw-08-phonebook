import React, { useState } from 'react'
import css from './LoginForm.module.css'
import { Button, TextField } from '@mui/material'
const LoginForm = ({login}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleChangeEmail = (e)=>{    
        setEmail ( e.target.value
              )}
      const handleChangePassword = (e)=>{
        setPassword( e.target.value)
       }
  
       const handleSubmit = (e)=>{
        e.preventDefault()
          if(email === "" || password === "")
          {return
          }
          login({ email, password });}
          

  return (<div >
    <form className={css.form} onSubmit={handleSubmit}>
 <TextField
  label="Email"
  variant="filled"
  id='email'
  type="text"
  color="secondary"
  onChange={handleChangeEmail}
value={email}
  focused
/>
<TextField
  label="Password"
  variant="filled"
  id='password'
  type="password"
  color="secondary"
  onChange={handleChangePassword}
value={password}
  focused
/>
<Button variant="contained" color="success" type='submit'  >submit</Button>
    </form>
    </div>
  )
}

export default LoginForm
