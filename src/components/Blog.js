import React, { Component } from 'react';
import axios from 'axios'
const baseUrl = '/api/blogs'

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      author: props.blog.author,
      title: props.blog.title,
      url: props.blog.url,
      likes: props.blog.likes,
      user: props.blog.user,
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({visible: !this.state.visible})
  }

  likeBlog = async () => {
    console.log('blog liked!')

    this.setState({ likes: this.state.likes + 1 })

    const likedBlog = {
      author: this.state.author,
      title: this.state.title,
      url: this.state.url,
      likes: this.state.likes,
      user: this.state.user
    }
  }

  render() {
    //const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    const blogStyle = {
      color: 'blue'
    }

    return (
      <div>
        <a onClick={this.toggleVisibility} style={blogStyle}>{this.state.title}</a> - {this.state.author}
        <div style={showWhenVisible}>
          <ul>
            <li>{this.state.url}</li>
            <li>likes: {this.state.likes} <button onClick={this.likeBlog}>Like</button></li>
            <li>added by: {this.state.user}</li>
          </ul>

        </div>
      </div> 
    )
  }
}

export default Blog;