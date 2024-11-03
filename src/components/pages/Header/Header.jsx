import React from 'react';

const Header = () => {
  return (
    <header className="text-center mt-20">
      <div>
        <h4 className="text-white leading-tight text-5xl font-light font-rubik">WE ARE</h4>
        <h1 className="text-white leading-snug text-6xl font-semibold font-rubik">BIG DIGITAL AGENCY</h1>
        <p className="text-gray-200 leading-7 text-base font-light font-raleway">
          We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.
        </p>
        <a href="#services" className="inline-block mt-5">
          <button className="font-medium leading-none text-base text-indigo-900 bg-white  rounded-full py-4 px-8">
            Get Started
          </button>
        </a>
      </div>
    </header>
  );
};

export default Header;


