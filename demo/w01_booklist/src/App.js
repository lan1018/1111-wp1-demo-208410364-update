import './App.css';

const App = () => {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <img src="https://m.media-amazon.com/images/I/81qYyfUILxL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
      <h1>The Saints of Swallow Hill: A Fascinating Depression Era Historical Novel</h1>
      <h4>Donna Everhart</h4>
    </article>
  )
}


export default App;
