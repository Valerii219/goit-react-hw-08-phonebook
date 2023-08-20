import {  instanceForUsers, setToken } from "./api"

const setTokenToLocal = (token) => {
   localStorage.setItem('token',JSON.stringify(token))
 }
 

export const signUp = async(body)=>{
   const {data} = await instanceForUsers.post('users/signup', body)
   setToken(data.token)
   setTokenToLocal(data.token)
   return data
}

export const login = async(body)=>{
   const {data} = await instanceForUsers.post('users/login', body)
   setToken(data.token)
   setTokenToLocal(data.token)
   return data
}
export const logOut = async(body)=>{
   const {data} = await instanceForUsers.post('users/logout', body)
   setToken(data.token)
   return data
}

export const refresh = async()=>{
   const token = localStorage.getItem('token')
   token && setToken(JSON.parse(token))

   const {data} = await instanceForUsers.get('users/current')
   setTokenToLocal(data.token)
   return data
}