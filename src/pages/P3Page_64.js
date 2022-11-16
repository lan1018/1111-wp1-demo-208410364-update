import { useState } from 'react';
import Product_64 from '../components/Product_64';
import midterm_data_64 from '../midterm_data_64';

const P3Page_64 = () => {
  const [products, setProducts] = useState(midterm_data_64);
  console.log('products', products);
  return (
    <>
      <section className="main-section">
        <div className="filter-left">
          <div className="left-content">
            <form className="input-form">
              <input type="text" className="search-input" placeholder="search..." />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button className="company-btn">all</button>
              <button className="company-btn">ikea</button>
              <button className="company-btn">marcos</button>
              <button className="company-btn">caressa</button>
            </article>
          </div>
        </div>
        <div className="products-right">
          <div className="products-container">
            {products.map((product) => {
              const { id, img, title, price} = product;
              return (
                <Product_64 key={id} id={id} img={img} title={title} price={price} />
              )
              })}
          </div>
        </div>
      </section>
    </>
  );
};
export default P3Page_64;
