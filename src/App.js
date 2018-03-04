import React from 'react'
import Blog from './components/Blog'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'
import NewBlogForm from './components/NewBlogForm'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      blogs: [],
      user: null,
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    blogService.getAll().then(blogs =>
      this.setState({ blogs })
    )

    const loggedUserJSON = window.localStorage.getItem('loggedAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      this.setState({user})
      loginService.setToken(user.token)
    }
  }

  login = async (event) => {
    event.preventDefault()
    try{
      const user = await loginService.login({
        username: this.state.username,
        password: this.state.password
      })
      
      window.localStorage.setItem('loggedAppUser', JSON.stringify(user))

      loginService.setToken(user.token)
      this.setState({ username: '', password: '', user})
      console.log('login successful! Logged in as:', this.state.user)
    } catch(exception) {
      this.setState({
        error: 'käyttäjätunnus tai salasana virheellinen',
      })
      setTimeout(() => {
        this.setState({ error: null })
      }, 5000)
    }
  }

  logout = async (event) => {
    console.log('logout')
    window.localStorage.clear()
    this.setState({ user: null })
  }

  handleFieldChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  addNewBlogToState = (newBlog) => {
    this.setState({ blogs: this.state.blogs.concat(newBlog) })
  }

  updateBlogInState = (updatedBlog) => {
    console.log('Updating blog!')
    
    const newBlogArray = this.state.blogs.map(blog =>
      blog._id !== updatedBlog._id ? blog : updatedBlog
    )
    
    this.setState({ blogs: newBlogArray })
  }

  render() {

    const LoginForm = ({ handleSubmit, handleChange, username, password }) => {
      return (
        <div>
        <h2>Kirjaudu</h2>
        
        <form onSubmit={this.login}>
          <div>
            käyttäjätunnus
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </div>
          <div>
            salasana
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">kirjaudu</button>
        </form>
      </div>
      )
    }

    const logoutButton = () => (
      <button onClick={this.logout}>kirjaudu ulos</button>
    )

    const userInfo = () => (
      <div>
        <p>User {this.state.user.name} is logged in!</p>
        {logoutButton()}
      </div>
    )

    return (
      <div>
        <Togglable buttonLabel="login form">
          <LoginForm
            handleSubmit={this.login}
            handleChange={this.handleFieldChange}
            username={this.state.username}
            password={this.state.password}
          />
        </Togglable>

        {this.state.user !== null && userInfo()}

        <h2>blogs</h2>
        {this.state.blogs.map(blog => 
          <Blog key={blog._id} blog={blog} showUpdatedBlog={this.updateBlogInState}/>
        )}

        <NewBlogForm showCreatedBlog={this.addNewBlogToState}/>
      </div>
    );
  }
}

export default App;
