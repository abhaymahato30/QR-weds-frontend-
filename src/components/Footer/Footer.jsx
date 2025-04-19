import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="bg-[#ffe7e7] text-gray-800 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-start gap-10">
        
        {/* Logo + Description */}
        <aside className="flex flex-col items-center sm:items-start text-center sm:text-left max-w-sm">
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current mb-3"
          >
            <path d="M22.672 15.226l-2.432.811..."></path>
          </svg>
          <p className="font-semibold text-xl mb-1">QR WEDS</p>
          <p className="text-sm text-gray-700">Providing the most unique card designs for your special moments.</p>
        </aside>

        {/* Links Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-72 text-center sm:text-left">
          {/* Services */}
          <nav>
            <h6 className="text-xl font-bold mb-3">Services</h6>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="/">Branding</a></li>
              <li><a className="hover:underline" href="/">Design</a></li>
              <li><a className="hover:underline" href="/">Marketing</a></li>
              <li><a className="hover:underline" href="/">Advertisement</a></li>
            </ul>
          </nav>

          {/* Company */}
          <nav>
            <h6 className="text-xl font-bold mb-3">Company</h6>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="/about">About Us</a></li>
              <li><a className="hover:underline" href="/contact">Contact</a></li>
              <li><a className="hover:underline" href="/faq">FAQ</a></li>
              <li><a className="hover:underline" href="/">Press Kit</a></li>
            </ul>
          </nav>

          {/* Legal */}
          <nav>
            <h6 className="text-xl font-bold mb-3">Legal</h6>
            <ul className="space-y-2">
              <li><a className="hover:underline" href="/">Terms of Use</a></li>
              <li><a className="hover:underline" href="/">Privacy Policy</a></li>
              <li><a className="hover:underline" href="/">Cookie Policy</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
