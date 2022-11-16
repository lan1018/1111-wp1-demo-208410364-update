import { useState } from 'react';
import Product_xx from '../components/Product_64';
import midterm_data_xx from '../midterm_data_xx';

const P3Page_64 = () => {
  const [products, setProducts] = useState(midterm_data_xx);
  console.log('products', products);
  return (
    <>
      <h2>P3Page_64</h2>
    </>
  );
};
export default P3Page_64;
