import { useState } from 'react';
import Category_xx from './components/Category_xx';
import Menu_xx from './components/Menu_xx';
import items from './data';

const allCategories = ['all', 'breakfast', 'lunch', 'shakes', '89'];

const App_xx = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);


  const filterItems = (category) => {
    if(category === 'all') {
      setMenuItems(items);
    } else {
      const newItems = items.filter( (item) => item.category === category);
      setMenuItems(newItems);
    }

  }

  console.log('menuItems', menuItems);
  return (
    <section className='menu'>
      {/* title */}
      <div className='title'>
        <h2>our menu 123456789</h2>
        <div className='underline'></div>
      </div>
      {/* filter buttons */}
      <Category_xx categories={categories} filterItems={filterItems} />
      {/* menu items */}
      <Menu_xx items={menuItems} />
    </section>
  );
};

export default App_xx;
