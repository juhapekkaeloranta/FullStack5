let token = null

const blogs = [
  {
    "_id": "5a994c796519886054d29ae3",
    "title": "TDD harms architecture",
    "author": "Robert C. Martin",
    "url": "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    "likes": 17,
    "user": "5a9021c79c15c330dbf5084e",
    "__v": 0
  },
  {
    "_id": "5a9a6f4208399c79f3955585",
    "title": "t",
    "author": "a",
    "url": "u",
    "likes": 0,
    "user": "5a9021c79c15c330dbf5084e",
    "__v": 0
  }
]

const getAll = () => {
  console.log('mockBlogs.getAll returning:', blogs.length, 'blogs')
  return Promise.resolve(blogs)
}

export default { getAll, blogs }