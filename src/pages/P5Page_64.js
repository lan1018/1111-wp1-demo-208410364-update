import { useEffect, useState } from 'react';
import Product_xx from '../components/Product_64';
import midterm_data_64 from '../midterm_data_64';

const P5Page_64 = () => {
  const [products, setProducts] = useState(midterm_data_64);
  console.log('products', products);

  return (
    <>
      <h2>P5Page_64</h2>
    </>
  );
};
export default P5Page_64;
