import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Portfolio.css'

const items = [
  { id: 1, category: 'graphic', img: './images/img1.jpg' },
  { id: 2, category: 'web', img: './images/img2.jpg' },
  { id: 3, category: 'brand', img: './images/img3.jpg' },
  { id: 4, category: 'graphic', img: './images/img4.jpg' },
  { id: 5, category: 'web', img: './images/img5.jpg' },
  { id: 6, category: 'brand', img: './images/img6.jpg' },
  { id: 7, category: 'brand', img: './images/img7.jpg' },
  { id: 8, category: 'graphic', img: './images/img8.jpg' },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredItems = activeFilter === '*' ? items : items.filter(item => item.category === activeFilter);

  return (
    <section className="py-16" id='portfolio'>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className=" mb-4">
            <span className='creative font-rubik'>Creative</span> <span className='portfolio font-rubik'>Portfolio</span>
          </h4>
          <p className="header">
            We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design &amp; web development services.
          </p>
        </div>
      </div>

      <div className="container-fluid mx-auto px-4 font-rubik">
        <div className="text-center mb-8">
          <div className="flex justify-center gap-6">
            {['*', 'brand', 'web', 'graphic'].map(filter => (
              <span
                key={filter}
                data-filter={filter}
                className={`cursor-pointer font-semibold py-2 px-4 transition-colors duration-300 ${filter === activeFilter ? 'text-white bg-blue-600 rounded-full' : ''}`}
                onClick={() => handleFilterChange(filter)}
              >
                {filter === '*' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap -mx-4">
          {filteredItems.map(item => (
            <div key={item.id} className="w-full sm:w-1/2 lg:w-1/4 px-4 mb-8">
              <div className="relative overflow-hidden group">
                <img src={item.img} alt="portfolio" className="w-full h-auto" />
                <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <div className="text-center text-white">
                    <p>Logo | Branding</p>
                    <h6 className="mt-2 text-xl">Creative Web Design</h6>
                    <a href={item.img} className="block mt-4">
                      <span className="inline-block p-2 bg-white text-black rounded-full">
                        <i className="fas fa-long-arrow-alt-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;






