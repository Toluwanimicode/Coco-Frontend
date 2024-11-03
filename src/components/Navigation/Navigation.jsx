import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        {/* Logo */}
        <a className="logo" href="#">
          <img src={"./images/logo-light.png"} alt="logo" className="h-8"/>
        </a>

        <button
          className="block lg:hidden text-white"
          type="button"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Navbar links */}
        <div style={{ fontFamily: 'Playfair Display, serif' }} className={`lg:flex flex-grow items-center ${isOpen ? 'justify-center' : 'justify-end'} ${isOpen ? 'flex' : 'hidden'} lg:static absolute top-16 left-0 right-0 bg-gray-900 lg:bg-transparent z-10 lg:shadow-none shadow-md`} id="navbarSupportedContent">
          <ul className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 py-4 lg:py-0 px-4 lg:px-0 items-center">
            <li className="nav-item">
              <a className="nav-link active text-white brightness-125" href="#" >Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white brightness-125" href="#services" >Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white brightness-125" href="#portfolio" >Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white brightness-125" href="#team" >Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white brightness-125" href="#price" >Price</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white brightness-125" href="#blog" >Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white brightness-125" href="#contact" >Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;




























