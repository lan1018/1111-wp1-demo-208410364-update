import { Link, Outlet } from 'react-router-dom';
import Navbar_64 from '../components/Navbar_64';

const SharedLayout_64 = () => {
  return (
    <>
      <Navbar_64 />
      <section className='section'>
        <Outlet />
      </section>
    </>
    
  );
};
export default SharedLayout_64;
