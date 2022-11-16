const Product_64 = ({id, img, name, price}) => {
  return (
    <>
      <div className="single-product" key={id}>
        <img
          src={img}
          className="single-product-img img"
          alt="high-back bench"
        />
        <footer>
          <h5 className="name">{name}</h5>
          <span className="price">${price}</span>
        </footer>
      </div>
    </>
  );
};
export default Product_64;
