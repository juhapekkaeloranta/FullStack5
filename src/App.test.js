import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'
import LoginForm from './components/LoginForm';

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<App />)
  })

  
  it('renders all blogs it gets from backend', () => {
    app.update()

    const blogComponents = app.find(Blog)
    expect(blogComponents.length).toEqual(0)

    const loginForm = app.find(LoginForm)
    expect(loginForm.length).toEqual(1) 
  })
})