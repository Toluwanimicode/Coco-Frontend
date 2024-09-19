import React, { useState } from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';
import axios from 'axios';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [responseMessage, setResponseMessage] = useState(''); // For success/error message

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/submit-form', formData);
            setResponseMessage('Message sent successfully!'); // Set success message
    
            // Clear the message after 2 seconds
            setTimeout(() => {
                setResponseMessage('');
            }, 2000);
    
            // Optionally, reset the form after submission
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            console.error("Error sending message:", error);
            setResponseMessage('Failed to send message. Please try again.');
    
            // Clear the error message after 2 seconds
            setTimeout(() => {
                setResponseMessage('');
            }, 2000);
        }
    };
    

    return (
        <section className="contact bg-gray-100 py-16" id='contact' >
            <div className="container mx-auto">
                <div className="flex flex-wrap">

                    <div className="section-head mx-auto mb-8 lg:mx-0 lg:col-span-6 lg:offset-3">
                        <h4 className="text-center text-3xl font-semibold mb-4">Get <span className="text-blue-500">In</span> Touch</h4>
                        <p className="text-center text-gray-600">We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
                    </div>

                    <div className="lg:w-1/2 px-4 lg:px-0">
                        <div className="contact-info mb-8">
                            <h5 className="text-lg font-semibold mb-2">Contact Us :</h5>
                            <p className="text-gray-600 mb-4">Ready to bring your ideas to life? We’re here to help! Reach out to us via phone, email, or visit our office to discuss your project.</p>
                            <div className="flex items-center mb-4">
                                <PhoneIcon className="h-6 w-6 text-blue-500 mr-2" />
                                <div>
                                    <h6 className="font-semibold">Phone :</h6>
                                    <p>+20 010 251 789 18 , 251 789 18</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <EnvelopeIcon className="h-6 w-6 text-blue-500 mr-2" />
                                <div>
                                    <h6 className="font-semibold">Email :</h6>
                                    <p>Coco_support@website.com</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <MapPinIcon className="h-6 w-6 text-blue-500 mr-2" />
                                <div>
                                    <h6 className="font-semibold">Address :</h6>
                                    <p>4655 Carter Street ,Olney, Illinois</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-1/2 px-4 lg:px-0">
                        <form className="form" onSubmit={handleSubmit} noValidate>
                            <div className="controls">
                                <div className="flex flex-wrap -mx-2">
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <div className="form-group">
                                            <input 
                                                id="form_name" 
                                                type="text" 
                                                name="name" 
                                                placeholder="Name" 
                                                value={formData.name} 
                                                onChange={handleChange} 
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/2 px-2 mb-4">
                                        <div className="form-group">
                                            <input 
                                                id="form_email" 
                                                type="email" 
                                                name="email" 
                                                placeholder="Email" 
                                                value={formData.email} 
                                                onChange={handleChange} 
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                                                required 
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-2 mb-4">
                                        <div className="form-group">
                                            <input 
                                                id="form_subject" 
                                                type="text" 
                                                name="subject" 
                                                placeholder="Subject" 
                                                value={formData.subject} 
                                                onChange={handleChange} 
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full px-2 mb-4">
                                        <div className="form-group">
                                            <textarea 
                                                id="form_message" 
                                                name="message" 
                                                placeholder="Message" 
                                                rows="4" 
                                                value={formData.message} 
                                                onChange={handleChange} 
                                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500" 
                                                required
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="w-full px-2 mb-4">
                                        <button 
                                            type="submit" 
                                            className="butn butn-bg w-full py-2 px-4 bg-blue-500 text-white rounded-md focus:outline-none hover:bg-blue-600 transition duration-300">
                                            <span>Send Message</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {responseMessage && <p className="text-center text-red-500 mt-4">{responseMessage}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;





