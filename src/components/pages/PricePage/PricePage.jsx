import React from 'react';
import "./PricePage.css"

const PricePage = () => {
  return (
    <section className="price-section py-16 bg-gray-200 relative" id='price'>
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="section-head mb-10">
            <h4 className=" font-rubik">
              <span className='pricing-text'>Pricing</span> <span className="table-text">Table</span>
            </h4>
            <p className=" subheading font-raleway">We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
          </div>
          
          <div className="pricing-tables grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`item p-4 rounded-lg ${
                  plan.active
                    ? 'bg-gray-300 shadow-lg'
                    : 'bg-white'
                }`}
                style={{
                  backgroundColor: plan.type === 'Standard' ? '#1F4BBB' : 'inherit',
                }}
              >
                <div className="type py-4">
                  <h4 className={`text-2xl font-bold ${
                    plan.type === 'Standard' ? 'text-white' : ''
                  }`}>{plan.type}</h4>
                </div>
                <div className="value py-4">
                  <h3 className={`text-4xl font-bold ${
                    plan.type === 'Standard' ? 'text-white' : ''
                  }`}>
                    <span>$</span>{plan.price}
                  </h3>
                  <span className={`${plan.type === 'Standard' ? 'text-white' : 'text-gray-600'}`}>/ Month</span>
                </div>
                <div className="features py-4">
                  <ul className={`${plan.type === 'Standard' ? 'text-white' : 'text-gray-700'}`}>
                    {plan.features.map((feature, index) => (
                      <li key={index} className="mb-2">{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="order py-4">
                  <a href="#0" className={`px-6 py-2 rounded-lg font-bold ${
                    plan.active ? 'bg-blue-500 text-white' : 'bg-blue-600 text-white hover:bg-blue-500 transition'
                  }`}>
                    Purchase Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="curve curve-bottom"></div>
    </section>
  );
};

const pricingPlans = [
  {
    type: 'Free',
    price: '00',
    features: ['10 GB Disk Space', '15 Domain Names', '4 Email Address', 'Enhanced Security', 'Unlimited Support'],
    active: false,
  },
  {
    type: 'Basic',
    price: '10',
    features: ['10 GB Disk Space', '15 Domain Names', '4 Email Address', 'Enhanced Security', 'Unlimited Support'],
    active: false,
  },
  {
    type: 'Standard',
    price: '30',
    features: ['100 GB Disk Space', '30 Domain Names', '5 Email Address', 'Enhanced Security', 'Unlimited Support'],
    active: true,
  },
  {
    type: 'Premium',
    price: '80',
    features: ['500 GB Disk Space', '100 Domain Names', '10 Email Address', 'Enhanced Security', 'Unlimited Support'],
    active: false,
  },
];

export default PricePage;






