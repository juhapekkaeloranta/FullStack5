import React from 'react'
import loginService from '../services/login'
import BlogService from '../services/blogs'
import PropTypes from 'prop-types'

const baseUrl = '/api/blogs'

class NewBlogForm extends React.Component {
  static propTypes = {
    showCreatedBlog: PropTypes.func.isRequired
  }
  
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

    const config = {
      headers: { 'Authorization': loginService.getToken() }
    }

    const savedBlog = await BlogService.newBlog(baseUrl, newBlog, config)
    
    this.props.showCreatedBlog(savedBlog)
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