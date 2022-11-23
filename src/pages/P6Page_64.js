import { useEffect, useState } from 'react';
import Alert_64 from '../components/Alert_64';
import Product_64 from '../components/Product_64';
import midterm_data_64 from '../midterm_data_64';

const P6Page_64 = () => {
  const [searchName, setSearchName] = useState('');
  const [products, setProducts] = useState(midterm_data_64);

  console.log('products', products);

  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: ''
  });

  useEffect(()=>{
    const filterProducts = midterm_data_64.filter((product) =>
      product.title.toLowerCase().includes(searchName.toLowerCase())
    );
    setProducts(filterProducts);
    }, [searchName]);

  const showAlert = (show = false, msg = '',type = '') => {
    setAlert({ show, msg, type});
  }

  const filterItems = (category) => {
    if (category == 'all') {
      setProducts(midterm_data_64);
    } else {
      const newProducts = midterm_data_64.filter(
        (product) => product.category === category
      );
      setProducts(newProducts);
    }
  };

  const clearAllProducts = () => {
    showAlert(true, 'all products deleted', 'danger');
    setProducts([]);
  };

  const fetchAllProducts = () => {
    setProducts(midterm_data_64);
  }

  return (
    <>
      <section className="main-section">
        <div className="filter-left">
          <div className="left-content">
            <form className="input-form">
              <input type="text" 
              value={searchName}
              onChange={(e) => {
                setSearchName(e.target.value)
              }}
              className="search-input" 
              placeholder="search..." />
            </form>
            <h4>Company</h4>
            <article className="companies">
              <button className="company-btn"
              onClick={() => filterItems("all")}>all</button>
              <button className="company-btn"
              onClick={() => filterItems("ikea")}>ikea</button>
              <button className="company-btn"
              onClick={() => filterItems("marcos")}>marcos</button>
              <button className="company-btn"
              onClick={() => filterItems("caressa")}>caressa</button>
            </article>
            <button className='clear-btn' onClick={clearAllProducts}>
              Clear All
            </button>
            <button className='fetch-btn' onClick={fetchAllProducts}>
              Fetch All
            </button>
          </div>
        </div>
        { alert.show && <Alert_64 {...alert} removeAlert={showAlert} />}
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
export default P6Page_64;
