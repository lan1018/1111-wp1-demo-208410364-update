import { useState } from 'react';
import midterm_data_xx from '../midterm_data_xx';

const P2Page_64 = () => {
  const [products, setProducts] = useState(midterm_data_xx);
  console.log('products', products);
  return (
    <>
      <h2>P2Page_64</h2>
    </>
  );
};
export default P2Page_64;
