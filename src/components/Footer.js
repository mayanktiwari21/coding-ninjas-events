import React from 'react';
import CNLOGO from './CNLOGO.svg';

const Footer = () => {
  return (
    <div className='row footer-div' style={{ backgroundColor: '#1c0d04' }}>
      <div className='col-md-3 col-sm-12'>
        <img src={CNLOGO} alt='Coding Ninjas' />
      </div>
      <div className='col-md-2 col-sm-12'>
        <ul className='footer-ul'>
          <h6>CODING NINJAS</h6>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
          <li>Pricing & Refund Policy</li>
          <li>Bug Bounty</li>
          <li>Customers</li>
          <li>Press Release</li>
        </ul>
      </div>
      <div className='col-md-2 col-sm-12'>
        <ul className='footer-ul'>
          <h6>PRODUCTS</h6>
          <li>Courses</li>
          <li>Try courses for Free</li>
          <li>Career Camp</li>
          <li>Hire Talent</li>
        </ul>
      </div>
      <div className='col-md-2 col-sm-12'>
        <ul className='footer-ul'>
          <h6>COMMUNITY</h6>
          <li>CodeStudio</li>
          <li>Blog</li>
          <li>About Us</li>
          <li>Events</li>
          <li>Campus Ninja</li>
          <li>Affiliate</li>
        </ul>
      </div>
      <div className='col-md-3 col-sm-12'>
        <h6>Follow us on</h6>
        <ul className='footer-ul list-group list-group-horizontal social'>
          <li className='list-group-item'>
            <i className='fab fa-facebook-f'></i>
          </li>
          <li className='list-group-item'>
            <i className='fab fa-instagram'></i>
          </li>
          <li className='list-group-item'>
            <i className='fab fa-youtube'></i>
          </li>
          <li className='list-group-item'>
            <i className='fab fa-twitter'></i>
          </li>
          <li className='list-group-item'>
            <i className='fab fa-linkedin-in'></i>
          </li>
          <li className='list-group-item'>
            <i className='fab fa-telegram-plane'></i>
          </li>
        </ul>
        <br></br>
        <h6>CONTACT US</h6>
        <ul className='footer-ul'>
          <li>
            <i className='fas fa-phone-volume'></i> 1800-123-3598
          </li>
          <li>
            <i className='fas fa-envelope'></i> contact@codingninjas.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
