import React from 'react';

// components
import Navbar_64 from './components/Navbar_64';
import CartContainer_64 from './components/CartContainer_64';

// items
import { useGlobalContext_64 } from './Context_64';

const App_64 = () => {
  const {loading, cart } = useGlobalContext_64();
  // if (loading) {
  //   return (
  //     <div className='loading'>
  //       <h1>Loading...</h1>
  //     </div>
  //   );
  // }
  return (
    <main>
      <Navbar_64 />
      <CartContainer_64 />
    </main>
  );
};

export default App_64;
