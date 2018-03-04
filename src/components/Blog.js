import React, { Component } from 'react';

class Blog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  

  toggleVisibility = () => {
    this.setState({visible: !this.state.visible})
  }

  render() {
    //const hideWhenVisible = { display: this.state.visible ? 'none' : '' }
    const showWhenVisible = { display: this.state.visible ? '' : 'none' }

    const blog = this.props.blog

    const blogStyle = {
      color: 'blue'
    }

    return (
      <div>
        <a onClick={this.toggleVisibility} style={blogStyle}>{blog.title}</a> - {blog.author}
        <div style={showWhenVisible}>
          <ul>
            <li>{blog.url}</li>
            <li>likes: {blog.likes}</li>
            <li>added by: {blog.user}</li>
          </ul>

        </div>
      </div> 
    )
  }
}

export default Blog;