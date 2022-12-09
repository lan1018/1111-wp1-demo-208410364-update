import React, { useState } from 'react';

const T12_xx_UseStateBasics = () => {
  // let title = 'random title'
  const [title, setTitle] = useState('random title');
  const handleClick = () => {
    setTitle('Hello World');
    console.log('title1', title);
  }

  console.log('title2', title);

  return (
    <>
       <h2>{title}</h2>
       <button type='button' className='btn' onClick={handleClick}>
        change title
       </button>
    </>
  );
};

export default T12_xx_UseStateBasics;
