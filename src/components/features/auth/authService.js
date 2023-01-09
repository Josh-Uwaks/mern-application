import axios from "axios";
const API = axios.create({baseURL: 'http://localhost:3000'})
export const signIn = (formData) => API.post('/api/users/login', formData)
export const signUp = (formData) => API.post('/api/users/registration', formData)