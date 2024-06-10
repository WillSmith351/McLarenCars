import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  
  const linkClass = (path) => (
    `text-lg font-semibold hover:text-orange-500 ${
      location.pathname === path ? 'text-orange-500' : 'text-black'
    }`
  );

  const barClass = (path) => (
    `block h-0.5 mt-1 transition-all duration-300 transform ${
      location.pathname === path ? 'bg-orange-500 scale-x-100' : 'bg-transparent scale-x-0'
    }`
  );

  return (
    <nav className="bg-white p-4">
      <ul className="flex space-x-8 justify-center">
        <li className="relative">
          <Link to="/" className={linkClass('/')}>
            Home
            <span className={barClass('/')}></span>
          </Link>
        </li>
        <li className="relative">
          <Link to="/entreprise" className={linkClass('/entreprise')}>
            Entreprise
            <span className={barClass('/entreprise')}></span>
          </Link>
        </li>
        <li className="relative">
          <Link to="/collection" className={linkClass('/collection')}>
            Collection
            <span className={barClass('/collection')}></span>
          </Link>
        </li>
        {/* <li className="relative">
          <Link to="/course" className={linkClass('/course')}>
            Course
            <span className={barClass('/course')}></span>
          </Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
