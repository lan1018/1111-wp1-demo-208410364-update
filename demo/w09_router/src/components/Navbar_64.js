import React from 'react'
import { Link } from 'react-router-dom';

const Navbar_64 = () => {
  return (
    <nav class="navbar">
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
      <Link to='/products'>Products</Link>
      <Link to='/booklist'>Booklist</Link>
    </nav>
  )
}

export default Navbar_64
