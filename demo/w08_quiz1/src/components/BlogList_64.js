import React from "react";
import Blog_64 from "./Blog_64";

const BlogList_64 = ({blogs, removeItem}) => {
    return (
        <div className='blogs-center'>
          {blogs.map((blog) => {
            const { id, img, title, desc, 
            category } = blog;
            return (
              <Blog_64 key={id} id={id} img={img} 
              title={title} desc={desc} 
              category={category} removeItem={removeItem}/>
            );
          })}
        </div>
    )
}

export default BlogList_64;