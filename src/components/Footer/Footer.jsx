import React from 'react';

const Footer = () => {
  return (
    <footer className="text-center relative">
      <div className="container mx-auto py-8">
        {/* Logo */}
        <a className="block mx-auto mb-4" href="#">
          <img src="./images/logo-light.png" alt="logo" className="mx-auto"/>
        </a>
        
        <div className="social flex justify-center space-x-4 mb-4">
          <a href="#0" className="text-gray-400 hover:text-gray-500">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#0" className="text-gray-400 hover:text-gray-500">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#0" className="text-gray-400 hover:text-gray-500">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="#0" className="text-gray-400 hover:text-gray-500">
            <i className="fab fa-behance"></i>
          </a>
          <a href="#0" className="text-gray-400 hover:text-gray-500">
            <i className="fab fa-pinterest-p"></i>
          </a>
        </div>

        <p className="text-gray-400">© 2024 Coco is proudly Powered by DAT-Tech. All Rights Reserved.</p>
      </div>

      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-16 bg-gray-100"></div>
    </footer>
  );
};

export default Footer;
