import React from 'react'
import axios from 'axios'
import loginService from '../services/login'

const baseUrl = '/api/blogs'

class NewBlogForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      author: 'a',
      title: 't',
      url: 'u'
    }
  }

  handleFieldChange = (event) => {
    console.log('click')
    this.setState({ [event.target.name]: event.target.value })
  }

  saveNewBlog = async (event) => {
    event.preventDefault()
    const newBlog = {
      author: this.state.author,
      title: this.state.title,
      url: this.state.url
    }

    console.log(newBlog)

    const config = {
      headers: { 'Authorization': loginService.getToken() }
    }

    console.log(config.headers)
    
    const response = await axios.post(baseUrl, newBlog, config)

    console.log(response)

    console.log('stop')
    return response
  }

  render() {
    return (
      <div>
        <h2>Uusi blogi:</h2>
          <form onSubmit={this.saveNewBlog}>
          <div>
            Author
            <input
              type="text"
              name="author"
              value={this.state.author}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            Title
            <input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            Url
            <input
              type="text"
              name="url"
              value={this.state.url}
              onChange={this.handleFieldChange}
            />
          </div>
          <button type="submit">Tallenna uusi</button>
        </form>
      </div>
    )
  }
}

export default NewBlogForm