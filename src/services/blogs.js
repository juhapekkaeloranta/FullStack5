import axios from 'axios'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const updateBlog = (id, updatedBlog) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedBlog)
  return request.then(response => response.data)
}

const newBlog = (baseUrl, newBlog, config) => {
  const request = axios.post(baseUrl, newBlog, config)
  return request.then(response => response.data)
}

export default { getAll, updateBlog, newBlog }