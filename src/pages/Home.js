import React from 'react';
import{Link} from 'react-router-dom';
import bgImage from '../assets/pizza.jpeg';
import'../styles/Home.css';

function home() {
  return (
    <div className='home' style={{backgroundImage:`url(${bgImage})`}}>
      <div className='headerContainer'>
        <h1>King's Menu</h1>
        <p>Slice Haven: Your Pizza Paradise</p>
        <Link to="/Menu">
        <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  )
}

export default home