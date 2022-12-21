import React from 'react'
import Blog_xx from './Blog_xx';
import { useBlogContext_xx } from '../BlogContext_xx'

const BlogList_xx = ()  => {
  const {blogs} = useBlogContext_xx();
  return (
    <div className="blogs-center">
        { blogs.map( (blog) => {
           const {id, img, title, desc, category} = blog;
           return (
            <Blog_xx key={id} id={id} img={img} title={title} desc={desc} category={category}/>
           )
        }) }
      </div>
  )
}

export default BlogList_xx
