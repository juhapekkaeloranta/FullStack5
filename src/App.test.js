import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import Blog from './components/Blog'
jest.mock('./services/blogs')
import blogService from './services/blogs'
import LoginForm from './components/LoginForm';

describe.only('App tests', () => {
  let app
/*
  describe('User not logged in', () => {
    beforeEach(() => {
      app = mount(<App />)
    })
  
    it('shows no blogs if not logged in', () => {
      app.update()
      const blogComponents = app.find(Blog)
      expect(blogComponents.length).toEqual(0)
  
      const loginForm = app.find(LoginForm)
      expect(loginForm.length).toEqual(1)
    })
  })
*/  
  describe('User logged in', () => {
    beforeEach(() => {
      const user = {
        username: 'testUser',
        password: 'testPasswd'
      }
      window.localStorage.setItem('loggedAppUser', JSON.stringify(user))
      console.log('Localstorage mockUser:', window.localStorage.getItem('loggedAppUser'))
      app = mount(<App />)
    })
    
    it('shows blogs if user has logged in', () => {
      app.update()

      const blogFormComponents = app.find('NewBlogForm')
      //const blogFormComponents = app.find(Blog)      
      console.log(blogFormComponents)
      expect(blogFormComponents.length).toEqual(1)
      //expect(blogComponents.length).toEqual(blogService.blogs.length)
    })
  })
})