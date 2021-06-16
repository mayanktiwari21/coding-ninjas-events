import React from 'react';
import CNLOGO from './CNLOGO1.svg';

const Navbar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid my-div'>
          <a className='navbar-brand' href='https://www.codingninjas.com/'>
            <img src={CNLOGO} alt='' width='60' height='34' />
          </a>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                <a
                  className='nav-link active'
                  aria-current='page'
                  href='https://www.codingninjas.com/'
                >
                  Home
                </a>
              </li>

              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='/#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Courses
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <a className='dropdown-item' href='/#'>
                      Learn C++
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='/#'>
                      Learn Java
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='/#'>
                      Career Track
                    </a>
                  </li>
                </ul>
              </li>

              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle'
                  href='/#'
                  id='navbarDropdown1'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Practice
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown1'>
                  <li>
                    <a
                      className='dropdown-item'
                      href='https://www.codingninjas.com/codestudio'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Code Studio
                    </a>
                  </li>
                  <li>
                    <a
                      className='dropdown-item'
                      href='https://codezen.codingninjas.com/dashboard?_ga=2.266736395.443440371.1623150711-594581239.1623150711'
                      target='_blank'
                      rel='noreferrer'
                    >
                      Code Zen
                    </a>
                  </li>
                  <li>
                    <hr className='dropdown-divider' />
                  </li>
                  <li>
                    <a className='dropdown-item' href='/#'>
                      Tests
                    </a>
                  </li>
                </ul>
              </li>

              <li className='nav-item'>
                <a className='nav-link' href='/#'>
                  Events
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='https://campus.codingninjas.com/?_ga=2.102060548.443440371.1623150711-594581239.1623150711'
                  target='_blank'
                  rel='noreferrer'
                >
                  Campus Ninjas
                </a>
              </li>
              <li className='nav-item'>
                <a
                  className='nav-link'
                  href='https://www.codingninjas.com/blog/'
                  target='_blank'
                  rel='noreferrer'
                >
                  Blog
                </a>
              </li>
            </ul>
            <div className='inner-div'>
              <ul className='navbar-nav'>
                <li className='nav-item'>
                  <a className='nav-link' href='/#'>
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
