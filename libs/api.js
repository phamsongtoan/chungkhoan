import axios from 'axios'

export const api = axios.create({
  baseURL: process.env.NEXT_API || 'https://apichungkhoang.orokucode.com/api'
})
