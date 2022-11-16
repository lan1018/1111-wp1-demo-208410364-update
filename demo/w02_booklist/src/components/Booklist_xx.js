import React from 'react';
import Book_xx from './Book_xx';
import { data } from './data';

const Booklist_xx = () => {
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        const { id, img, title, author } = book;
        return <Book_xx key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

export default Booklist_xx;
