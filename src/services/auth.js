import { deleteToken, instanceForUsers, setToken } from "./api"

export const signUp = async(body)=>{
   const {data} = await instanceForUsers.post('users/signup', body)
   setToken(data.token)
   return data
}

export const login = async(body)=>{
   const {data} = await instanceForUsers.post('users/login', body)
   setToken(data.token)
   return data
}
export const logOut = async(body)=>{
   const {data} = await instanceForUsers.post('users/logout', body)
   setToken(data.token)
   return data
}

export const get = async(body)=>{
   const {data} = await instanceForUsers.get('users/current', body)
   deleteToken(data.token)
   return data
}