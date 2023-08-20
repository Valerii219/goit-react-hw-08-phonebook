import axios from 'axios';



export const instanceForContacts = axios.create({baseURL:'https://64d877b35f9bf5b879ce4541.mockapi.io/'})

export const instanceForUsers = axios.create({baseURL:'https://connections-api.herokuapp.com/'})

export const setToken = (token)=>{
    instanceForUsers.defaults.headers.common['Authorization'] = `Bearer ${token}`
}


export const deleteToken = (token)=>{
    delete instanceForUsers.defaults.headers.common['Authorization'] 
}