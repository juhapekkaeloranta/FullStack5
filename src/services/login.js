import axios from 'axios'
const baseUrl = '/api/login'

let token = null

const login = async ({ username, password }) => {
  console.log('Trying to login with:')
  console.log(username)
  console.log(password)

  const response = await axios.post(baseUrl, { "username": username, "password": password})

  return response.data
}

const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

const getToken = () => {
  return token
}

export default { login, setToken, getToken }