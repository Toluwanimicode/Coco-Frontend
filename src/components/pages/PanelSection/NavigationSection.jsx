import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faImages, faHeadset, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

const NavigationSection = () => {
  return (
    <div className="navigation-section container mx-auto py-5 px-4" >
      <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" role="tablist">
        <Tab eventKey="about" title="About Us" role="tabpanel">
          <div className="tab-pane-content py-5">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <div className="about-us bg-white p-5 rounded-lg shadow-lg">
                  <h5 className="title text-2xl font-bold">About Us</h5>
                  <h6 className="sub-title text-xl mb-5">We Are A Creative Agency</h6>
                  <p className="mb-5">We’re full service which means we’ve got you covered on design and content right through to digital.</p>
                  <div className="skills mt-10">
                    <div className="skill-item mb-5">
                      <h6>Web Design</h6>
                      <div className="skill-progress h-2 bg-blue-500 rounded-full" style={{ width: '90%' }}></div>
                    </div>
                    <div className="skill-item mb-5">
                      <h6>Branding</h6>
                      <div className="skill-progress h-2 bg-blue-500 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="skill-item">
                      <h6>Development</h6>
                      <div className="skill-progress h-2 bg-blue-500 rounded-full" style={{ width: '80%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <img src="./images/image5.jpg" className="w-full h-auto rounded-lg shadow-lg" alt="About Us" />
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="mission" title="Our Mission" role="tabpanel">
          <div className="tab-pane-content py-5">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <div className="mission bg-white p-5 rounded-lg shadow-lg">
                  <h5 className="title text-2xl font-bold">Our Mission</h5>
                  <h6 className="sub-title text-xl mb-5">We Are A Creative Agency</h6>
                  <p className="mb-5"><b>We’re full service which means</b> we’ve got you covered on design and content right through to digital. You’ll form a lasting relationship with us, <b>collaboration is central to</b> everything we do. <b>We’ll push you out of</b> your comfort zone from time to time, but this is where you’ll shine. Bottom line is we want you to succeed at Faculty.</p>
                  <p>You’ll form a lasting relationship with us, collaboration is central to everything we do. We’ll push you out of your comfort zone from time to time, but this is where you’ll shine. Bottom line is we want you to succeed at Faculty.</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 relative">
                <img src="./images/image6.jpg" alt="Our Mission" className="w-full h-auto rounded-lg shadow-lg" />
                <div className="play-button absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-5xl cursor-pointer">
                  <FontAwesomeIcon icon={faPlayCircle} className="hover:text-white" />
                </div>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="why" title="Why Us?" role="tabpanel">
          <div className="tab-pane-content py-5">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
                <div className="why-us bg-white p-5 rounded-lg shadow-lg">
                  <h5 className="title text-2xl font-bold">Why Choose Us?</h5>
                  <h6 className="sub-title text-xl mb-5">We Are A Creative Agency</h6>
                  <p className="mb-5">We’re full service which means we’ve got you covered on design and content right through to digital. 
                     You’ll form a lasting relationship with us, collaboration is central to everything we do.
                  </p>
                  <ul className="feat mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <li>
                      <div className="feature-card bg-blue-700 p-5 rounded-lg text-center text-white hover:bg-blue-900 transition duration-300">
                        <FontAwesomeIcon icon={faDesktop} className="feature-icon text-4xl mb-2" />
                        <h6>Perfect Design</h6>
                      </div>
                    </li>
                    <li>
                      <div className="feature-card bg-blue-700 p-5 rounded-lg text-center text-white hover:bg-blue-900 transition duration-300">
                        <FontAwesomeIcon icon={faImages} className="feature-icon text-4xl mb-2" />
                        <h6>Retina Ready</h6>
                      </div>
                    </li>
                    <li>
                      <div className="feature-card bg-blue-700 p-5 rounded-lg text-center text-white hover:bg-blue-900 transition duration-300">
                        <FontAwesomeIcon icon={faHeadset} className="feature-icon text-4xl mb-2" />
                        <h6>Friendly Support</h6>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <div id="why-carousel" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="./images/image3.jpg" className="w-full h-auto rounded-lg shadow-lg" alt="Why Us 1" />
                    </div>
                    <div className="carousel-item">
                      <img src="./images/image4.jpg" className="w-full h-auto rounded-lg shadow-lg" alt="Why Us 2" />
                    </div>
                    <div className="carousel-item">
                      <img src="./images/image5.jpg" className="w-full h-auto rounded-lg shadow-lg" alt="Why Us 3" />
                    </div>
                  </div>
                  <a className="carousel-control-prev" href="#why-carousel" role="button" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#why-carousel" role="button" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default NavigationSection;





















