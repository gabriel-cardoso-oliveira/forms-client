import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
  // baseURL: 'https://apiforms.herokuapp.com',
})

// eslint-disable-next-line eol-last
export default api
