import React from 'react';
import Book_64 from '../components/w02-booklist/Book_64';
import { booklist_data } from '../booklist_data';

const BooklistPage_64 = () => {
  return (
    <section className='booklist'>
      {booklist_data.map((book, index) => {
        const { id, img, title, author } = book;
        return <Book_64 key={id} img={img} title={title} author={author} />;
      })}
    </section>
  );
};

export default BooklistPage_64;
