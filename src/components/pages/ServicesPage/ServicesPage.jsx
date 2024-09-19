import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor, faPencilRuler, faGem } from '@fortawesome/free-solid-svg-icons';
import { useSpring, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';
import NavigationSection from '../PanelSection/NavigationSection';

const ServicesPage = () => {
  // Intersection Observer for heading section
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: false,  // Set to false to allow multiple triggers
    threshold: 0.1,
  });

  // Intersection Observer for card section
  const { ref: cardRef, inView: cardInView } = useInView({
    triggerOnce: false,  // Set to false to allow multiple triggers
    threshold: 0.1,
  });

  // Animation for the heading section
  const headingSpring = useSpring({
    opacity: headingInView ? 1 : 0,
    transform: headingInView ? 'translateY(0)' : 'translateY(20px)',
    config: { tension: 120, friction: 14 }, // Slower animation speed
  });

  // Animation for the card section
  const cardSpring = useSpring({
    opacity: cardInView ? 1 : 0,
    transform: cardInView ? 'translateX(0)' : 'translateX(50px)',
    config: { tension: 120, friction: 14 }, // Slower animation speed
  });

  return (
    <section id='services' className="mt-24">
      <animated.div ref={headingRef} style={headingSpring} className='text-center'>
        <h4 className='text-3xl leading-9 font-medium text-black font-rubik'>
          About Our <span className="text-indigo-900">Creative</span> Agency
        </h4>
        <p className='text-base leading-7 text-gray-600 font-raleway mt-2 mx-auto max-w-3xl'>
          Lorem Ipsum is simply dummy text of the printing and type setting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
        </p>
      </animated.div>

      <div className="container mx-auto py-20 relative">
        <animated.div ref={cardRef} style={cardSpring} className="flex flex-wrap">
          <div className="w-full lg:w-1/3 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="relative inline-block p-4 rounded-full transition duration-300 hover:bg-blue-600">
                <FontAwesomeIcon icon={faAnchor} className="text-5xl text-gray-700" />
              </div>
              <h5 className="text-xl leading-tight font-medium text-black font-rubik mt-4">Web Design</h5>
              <h6 className="text-sm leading-tight text-indigo-900 font-rubik mt-2"><i>Modern &amp; Clean Design</i></h6>
              <p className="mt-2 text-base leading-7 text-gray-600 font-raleway">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="relative inline-block p-4 rounded-full transition duration-300 hover:bg-blue-600">
                <FontAwesomeIcon icon={faPencilRuler} className="text-5xl text-gray-700" />
              </div>
              <h5 className="text-xl leading-tight font-medium text-black font-rubik mt-4">Development</h5>
              <h6 className="text-sm leading-tight text-indigo-900 font-rubik mt-2"><i>Web &amp; Mobile Development</i></h6>
              <p className="mt-2 text-base leading-7 text-gray-600 font-raleway">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/3 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="relative inline-block p-4 rounded-full transition duration-300 hover:bg-blue-600">
                <FontAwesomeIcon icon={faGem} className="text-5xl text-gray-700" />
              </div>
              <h5 className="text-xl leading-tight font-medium text-black font-rubik mt-4">Branding</h5>
              <h6 className="text-sm leading-tight text-indigo-900 font-rubik mt-2"><i>Logo &amp; Motion Design</i></h6>
              <p className="mt-2 text-base leading-7 text-gray-600 font-raleway">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry
              </p>
            </div>
          </div>
        </animated.div>
        <NavigationSection />
      </div>
    </section>
  );
}

export default ServicesPage;




