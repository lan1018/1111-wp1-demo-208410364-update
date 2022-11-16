import React from 'react';

const Catetgory_xx = ({ categories }) => {
  return (
    <div className='btn-container'>
      <button type='button' className='filter-btn' data-id='all'>
        all
      </button>
      <button type='button' className='filter-btn' data-id='breakfast'>
        breakfast
      </button>
      <button type='button' className='filter-btn' data-id='lunch'>
        lunch
      </button>
      <button type='button' className='filter-btn' data-id='shakes'>
        shakes
      </button>
      <button type='button' className='filter-btn' data-id='dinner'>
        dinner
      </button>
    </div>
  );
};

export default Catetgory_xx;
