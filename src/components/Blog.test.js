import React from 'react'
import { shallow } from 'enzyme'
import Blog from './Blog'

describe.only('<Blog />', () => {
  
  it('after clicking name the details are displayed', () => {
    const blog = {
      author: 'Timo Testaaja',
      title: 'Komponenttitestaus tapahtuu jestillä ja enzymellä',
      url: 'testing.com',
      likes: 0
    }
    
    const blogComponent = shallow(
      <Blog 
        blog={blog}
      />
    )

    const blogHeader = blogComponent.find('.blogHeader')
    blogHeader.simulate('click')
    
    const detailsDiv = blogComponent.find('.blogDetails')

    expect(blogHeader.text()).toContain(blog.title)
    expect(blogHeader.text()).toContain(blog.author)
    expect(blogHeader.text()).not.toContain(blog.url)
    expect(blogHeader.text()).not.toContain("likes")
    expect(detailsDiv.text()).toContain(blog.url)
    expect(detailsDiv.text()).toContain("likes")
  })

})
