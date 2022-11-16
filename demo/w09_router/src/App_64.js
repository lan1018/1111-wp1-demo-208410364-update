import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AboutPage_64 from './pages/AboutPage_64';
import HomePage_64 from './pages/HomePage_64';
import ProductsPage_64 from './pages/ProductsPage_64';
import ErrorPage_64 from './pages/ErrorPage_64';
import SharedLayout_64 from './pages/SharedLayout_64';
import SharedProductLayout_64 from './pages/SharedProductLayout_64';
import SingleProductPage_64 from './pages/SingleProductPage_64'
import BooklistPage_64 from './pages/BooklistPage_64';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_64/>}>
          <Route index element={<HomePage_64 />} />
          <Route path='about' element={<AboutPage_64 />} />
          <Route path='products' element={<SharedProductLayout_64 />} >
            <Route index element={<ProductsPage_64 />} />
            <Route path=':productId' element={<SingleProductPage_64 />} />
          </Route>
          <Route path='booklist' element={<BooklistPage_64 />} />
          <Route path='*' element={<ErrorPage_64 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
