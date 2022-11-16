import './App_xx.css';

/*
const firstBook = {
  img: 'https://m.media-amazon.com/images/I/81qYyfUILxL._AC_UY327_FMwebp_QL65_.jpg',
  title:
    'The Saints of Swallow Hill: A Fascinating Depression Era Historical Novel',
  author: 'Donna Everhart',
};

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
  title: 'Our Class is a Family',
  author: 'Shannon Olsen',
};

const thirdBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
  title: 'The Vanishing Half: A Novel',
  author: 'Brit Bennett',
};
*/

const data = [
  {
    id: 1,
    img: 'https://m.media-amazon.com/images/I/81qYyfUILxL._AC_UY327_FMwebp_QL65_.jpg',
    title:
      'The Saints of Swallow Hill: A Fascinating Depression Era Historical Novel',
    author: 'Donna Everhart',
  },
  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL200_SR200,200_.jpg',
    title: 'Our Class is a Family',
    author: 'Shannon Olsen',
  },
  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71e5m7xQd0L._AC_UL200_SR200,200_.jpg',
    title: 'The Vanishing Half: A Novel',
    author: 'Brit Bennett',
  },
  {
    id: 4,
    img: 'https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg',
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth',
  },
  {
    id: 5,
    img: 'https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/41-4IagYf1L._AC_UY327_FMwebp_QL65_.jpg',
    title:
      'In the Weeds: Around the World and Behind the Scenes with Anthony Bourdain',
    author: 'Tom Vitale',
  },
];

const App_xx = () => {
  return (
    <section className='booklist'>
      {data.map((book, index) => {
        const { id, img, title, author } = book;
        return <Book_xx key={id} img={img} title={title} author={author} />;
      })}
      {/* <Book_xx
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book_xx
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
      <Book_xx
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      /> */}
    </section>
  );
};

const Book_xx = ({ img, title, author }) => {
  // console.log('props', props);
  // const { img, title, author } = props;
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

export default App_xx;
