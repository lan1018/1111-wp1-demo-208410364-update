import React from "react";
import Blog_64 from "./Blog_64";
import { useBlogContext_64 } from '../BlogContext_64';

const BlogList_64 = () => {
  const { blogs } = useBlogContext_64();
  return (
    <div className='blogs-center'>
      {blogs.map((blog) => {
        const { id, img, title, desc, category } = blog;
        return (
          <Blog_64 key={id} id={id} img={img}
            title={title} desc={desc}
            category={category} />
        );
      })}
    </div>
  )
}

export default BlogList_64;