import { useState } from 'react';
import Category_xx from './components/Category_xx';
import Menu_xx from './components/Menu_xx';
import items from './data';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', 'lunch'];

const App_xx = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  console.log('menuItems', menuItems);
  return (
    <section className='menu'>
      {/* title */}
      <div className='title'>
        <h2>our menu -- 1234356789</h2>
        <div className='underline'></div>
      </div>
      {/* filter buttons */}
      <Category_xx categories={categories} />
      {/* menu items */}
      <Menu_xx items={menuItems} />
    </section>
  );
};

export default App_xx;
