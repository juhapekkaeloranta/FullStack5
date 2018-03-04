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
    const likedBlog = { ...this.state.blog, likes: this.state.blog.likes + 1 }
    
    const updatedBlog = await BlogService.updateBlog(this.state.blog._id, likedBlog)
    
    //Nyt blogin tila tallessa kahdessa paikassa!
    //Päivitettävä sekä Blog että App tilat!
    this.setState({ blog: likedBlog })
    this.props.showUpdatedBlog(updatedBlog)
  }

  render() {
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    const blogStyle = {
      color: 'blue'
    }

    return (
      <div>
        <a className="blogHeader" onClick={this.toggleVisibility} style={blogStyle}>{this.state.blog.title} - {this.state.blog.author}</a>
        <div className="blogDetails" style={showWhenVisible}>
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