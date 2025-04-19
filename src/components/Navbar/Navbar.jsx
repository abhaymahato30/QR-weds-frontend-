import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#ffe7e7] fixed w-full z-50 top-0 border-b border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="https://storage.googleapis.com/my-website-image/ExtraPhotos/LOGO3.png"
            className="h-8 w-8 md:h-10 md:w-12" // Adjust size for mobile and desktop
            alt="QR Logo"
          />
          <span className="text-base md:text-3xl font-bold text-[#d5a149] font-serif">
            QR WEDS
          </span>
        </Link>

        <div className="flex items-center gap-2 md:order-2">
          <Link to="/login">
            <button className="text-white bg-pink-500 hover:bg-pink-700 text-xs md:text-sm md:text-md px-3 py-1 md:px-4 md:py-2 rounded-lg font-medium hover:scale-105 duration-300">
              Login
            </button>
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-700 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } w-full md:flex md:w-auto md:order-1`}
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-[#ffe7e7] text-pink-600 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#ffe7e7]">
            {[
              { label: 'HOME', to: '/' },
              { label: 'SERVICE', to: '/Service' },
              { label: 'CARDS', to: '/Cards' },
              { label: 'VIDEO', to: '/videos' },
              { label: 'PHOTOGRAPHY', to: '/photography' },
              { label: 'CONTACT US', to: '/contact' },
            ].map((item, index) => (
              <li key={index} className="text-pink-600">
                <Link
                  to={item.to}
                  className="text-pink-600 block py-1 px-2 text-md font-semibold hover:scale-110 duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
