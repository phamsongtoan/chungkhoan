import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_API || 'http://127.0.0.1:1337/api'
})
