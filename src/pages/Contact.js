import React from 'react';
import PizzaLeft from '../assets/pizzaLeft.jpg';
import '../styles/Contact.css';

function Contacts() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., sending data to backend)
    // You can access form data using e.target elements
    const formData = new FormData(e.target);
    console.log('Form Data:', Object.fromEntries(formData.entries()));
    // Reset form fields if needed
    e.target.reset();
  };

  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form method="POST" id="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contacts;
