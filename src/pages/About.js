import React from 'react';
import MultiplePizza from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

export function about() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${MultiplePizza})`}}></div>
      <div className='aboutBottom'>
        <h1>About us</h1>
        <p>Welcome to King's Menu, where we bring you the royal taste of pizza fit for kings and queens!
          Established with a passion for crafting exceptional pizzas, our journey began with a commitment 
          to using the finest ingredients and craftsmanship. At King's Menu, every pizza is a masterpiece, 
          hand-stretched and topped with carefully selected fresh vegetables, premium meats, and cheeses. 
          Whether you prefer classic favorites like Margherita and Pepperoni or crave adventurous flavors 
          such as BBQ Chicken or Truffle Mushroom, our menu offers something for every pizza lover. 
          Visit us at Ngong town to dine-in, takeout, or enjoy delivery services. 
          Experience the taste of royalty at King's Menu - where every bite is a celebration of flavor and quality!</p>
      </div>
    </div>
  )
}

export default about