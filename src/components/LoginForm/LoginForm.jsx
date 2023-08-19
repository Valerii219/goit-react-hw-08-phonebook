import React, { useState } from 'react'
import css from './LoginForm.module.css'
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
       <label >Email</label>
  <input
  type="text"
  name="email"
  onChange={handleChangeEmail}
  value={email}
/>
<label >Password</label>
<input type="password"
name="password"
onChange={handleChangePassword}
value={password}></input>
<button type='submit'  >submit</button>
    </form>
    </div>
  )
}

export default LoginForm
