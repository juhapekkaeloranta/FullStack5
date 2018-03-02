import axios from 'axios'
const baseUrl = '/api/login'

const login = async ({ username, password }) => {
  console.log('Trying to login with:')
  console.log(username)
  console.log(password)

  const response = await axios.post(baseUrl, { "username": username, "password": password})

  return response.data
}

export default { login }