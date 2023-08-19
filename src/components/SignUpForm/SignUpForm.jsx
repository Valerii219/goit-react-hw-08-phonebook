import React, { useState } from 'react'
import css from '../LoginForm/LoginForm.module.css'
const SignUpForm = ({signUp}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const handleChangeName = (e)=>{
        setName( e.target.value)
       }
    const handleChangeEmail = (e)=>{    
        setEmail ( e.target.value
              )}
      const handleChangePassword = (e)=>{
        setPassword( e.target.value)
       }

       const handleSubmit = (e)=>{
        e.preventDefault()
          if(name === "" || email === "" || password === ""  )
          {return
          }
          signUp({ name, email, password });}
          

  return (
  <div >
    <form className={css.form} onSubmit={handleSubmit}>
    <label >Name</label>
  <input
  type="text"
  name="name"
  onChange={handleChangeName}
  value={name}
/>
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

export default SignUpForm
