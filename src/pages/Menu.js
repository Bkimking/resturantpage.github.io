import React from 'react';
import { MenuList } from '../helpers/MenuList';
import '../styles/Menu.css';
import Menuitems from '../components/Menuitems';

export function menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our Menu</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, Key) => {
          return <Menuitems 
          key={Key}
          image={menuItem.image}
          name={menuItem.name}
          price={menuItem.price}/>
          
        })}
      </div>
    </div>
  )
}

export default menu