import React from 'react'
import { shallow } from 'enzyme'
import SimpleBlog from './SimpleBlog'

describe.only('<SimpleBlog />', () => {
  it('renders content', () => {
    const blog = {
      author: 'Timo Testaaja',
      title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
      likes: 0
    }
    
    const blogComponent = shallow(
      <SimpleBlog 
        blog={blog}
      />
    )

    const contentDiv = blogComponent.find('.blogHeader')

    expect(contentDiv.text()).toContain(blog.author)
  })

  it('clicking the button calls event handler once', () => {
    const blog = {
      author: 'Timo Testaaja',
      title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
      likes: 0
    }
    const mockHandler = jest.fn()

    const blogComponent = shallow(
      <SimpleBlog 
        blog={blog}
        onClick={mockHandler}
      />
    )

    const button = blogComponent.find('button')
    button.simulate('click')
    button.simulate('click')

    expect(mockHandler.mock.calls.length).toBe(2)
  })
})