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

    const blogComponent = shallow(<SimpleBlog blog={blog} />)
    const contentDiv = blogComponent.find('.blogHeader')

    expect(contentDiv.text()).toContain(blog.author)
  })
})