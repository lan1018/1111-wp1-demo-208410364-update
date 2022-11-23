import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage_64 from './pages/HomePage_64';
import ErrorPage_64 from './pages/ErrorPage_64';
import SharedLayout_64 from './pages/SharedLayout_64';

import P1Page_64 from './pages/P1Page_64';
import P2Page_64 from './pages/P2Page_64';
import P3Page_64 from './pages/P3Page_64';
import P4Page_64 from './pages/P4Page_64';
import P5Page_64 from './pages/P5Page_64';
import P6Page_64 from './pages/P6Page_64';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout_64 />}>
          <Route index element={<HomePage_64 />} />
          <Route path='p1_64' element={<P1Page_64 />}/>
          <Route path='p2_64' element={<P2Page_64 />}/>
          <Route path='p3_64' element={<P3Page_64 />}/>
          <Route path='p4_64' element={<P4Page_64 />}/>
          <Route path='p5_64' element={<P5Page_64 />}/>
          <Route path='p6_64' element={<P6Page_64 />}/>
          <Route path='p6_64' element={<ErrorPage_64 />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
