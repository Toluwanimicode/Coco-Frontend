import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Team.css"

const Team = () => {
    const teamMembers = [
        { img: './images/Person1.jpg', name: 'Alex Smith', position: 'Project Manager' },
        { img: './images/Person2.jpg', name: 'Alex Smith', position: 'Project Manager' },
        { img: './images/Person3.jpg', name: 'Alex Smith', position: 'Project Manager' },
        { img: './images/Person5.jpg', name: 'Alex Smith', position: 'Project Manager' },
    ];

    return (
        <section className="py-16" id='team'>
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="section-head col-span-full mb-8">
                        <h4 className="text-center  font-rubik"><span className='header1'>Talent</span> <span className='header2'>Team</span></h4>
                        <p className="text-center font-raleway subheading">We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
                    </div>

                    <Carousel
                        showArrows={true}
                        showStatus={false}
                        showIndicators={true}
                        infiniteLoop={true}
                        autoPlay={true}
                        interval={3000}
                        stopOnHover={true}
                        emulateTouch={true}
                        dynamicHeight={true}
                        className="col-span-full"
                        showThumbs={false}  // Add this line to disable thumbnails
                    >
                        {teamMembers.map((member, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="relative group">
                                    <img src={member.img} alt={member.name} className="w-full h-auto max-w-xs rounded-full mb-4 transition duration-300 ease-in-out transform group-hover:scale-105" />
                                    <div className="social absolute bottom-0 left-0 right-0 p-4 flex justify-center items-center bg-white bg-opacity-75 transform translate-y-full group-hover:translate-y-0 transition duration-300">
                                        <a href="#0" className="icon mx-2 text-xl text-blue-600"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#0" className="icon mx-2 text-xl text-blue-400"><i className="fab fa-twitter"></i></a>
                                        <a href="#0" className="icon mx-2 text-xl text-blue-900"><i className="fab fa-behance"></i></a>
                                    </div>
                                </div>
                                <div className="info text-center">
                                    <h6 className="text-lg font-semibold">{member.name}</h6>
                                    <span className="text-gray-600">{member.position}</span>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </section>
    );
};

export default Team;












