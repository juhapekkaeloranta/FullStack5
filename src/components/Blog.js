import React, { Component } from 'react';
import BlogService from '../services/blogs'
import PropTypes from 'prop-types'

class Blog extends Component {
  static propTypes = {
    blog: PropTypes.object.isRequired
  }
  
  constructor(props) {
    super(props)
    this.state = {
      blog: props.blog,
      visible: false
    }
  }

  toggleVisibility = () => {
    this.setState({visible: !this.state.visible})
  }

  likeBlog = async () => {
    const likedBlog = {
      _id: this.state.blog._id,
      author: this.state.blog.author,
      title: this.state.blog.title,
      url: this.state.blog.url,
      likes: this.state.blog.likes + 1,
      user: this.state.blog.user
    }

    this.setState({ likes: this.state.blog.likes + 1 })
    
    const responseData = await BlogService.updateBlog(this.state.id, likedBlog)
    
    console.log('updated!')
    console.log(responseData) 
  }

  render() {
    //const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    const blogStyle = {
      color: 'blue'
    }

    return (
      <div>
        <a onClick={this.toggleVisibility} style={blogStyle}>{this.state.blog.title}</a> - {this.state.blog.author}
        <div style={showWhenVisible}>
          <ul>
            <li>{this.state.blog.url}</li>
            <li>likes: {this.state.blog.likes} <button onClick={this.likeBlog}>Like</button></li>
            <li>added by: {this.state.blog.user}</li>
          </ul>

        </div>
      </div> 
    )
  }
}

export default Blog;