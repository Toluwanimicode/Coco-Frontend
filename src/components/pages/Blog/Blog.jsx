import React from 'react';
import './Blog.css'

const Blog = () => {
  return (
    <section className="blog section-padding" id='blog'>
      <div className="container">
        <div className="row">
          <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
            <h4 className="text-center mt-10"><span className='font-rubik latest '>Latest</span>     <span className='news font-rubik'>News</span></h4>
            <p className=" font-raleway subtitle text-center mt-3 mb-3 header2">We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design &amp; web development services.</p>
          </div>
          <div className="col-lg-4">
            <div className="item mb-8">
              <div className="post-img">
                <div className="img">
                  <img src="./images/img9.jpg" alt="" className="w-full h-auto" />
                </div>
              </div>
              <div className="cont">
                <div className="info text-gray-600">
                  <div className='flex'>
                      <a href="#0 " className='font-rubik admin-text'><i>By : Admin</i></a>
                      <a href="#0" className='ml-3 font-rubik date-text'><i>06 Aug 2017</i></a>
                  </div>
                  <a href="#0" className="tag bg-gray-300 text-gray-700 px-2 py-1 rounded-lg ml-64 font-rubik wordpress-text">WordPress</a>
                </div>
                <h6 className='mb-3' ><a href="#0" className="wordpress-subtitle font-rubik">48 Best WordPress Themes</a></h6>
                <p className="text3">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
                <a href="#0" className="read-more">Read More <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item mb-8">
              <div className="post-img">
                <div className="img">
                  <img src="./images/img10.jpg" alt="" className="w-full h-auto" />
                </div>
              </div>
              <div className="cont">
                <div className="info text-gray-600">
                <div className='flex'>
                      <a href="#0" className='font-rubik admin-text'><i>By : Admin</i></a>
                      <a href="#0" className='ml-3 font-rubik date-text'><i>06 Aug 2017</i></a>
                </div>
                  <a href="#0" className="tag bg-gray-300 text-gray-700 px-2 py-1 rounded-lg ml-64 font-rubik wordpress-text">WordPress</a>
                </div>
                <h6 className='mb-3'><a href="#0" className="wordpress-subtitle font-rubik">48 Best WordPress Themes</a></h6>
                <p className=" text1">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
                <a href="#0" className="read-more">Read More <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item">
              <div className="post-img">
                <div className="img">
                  <img src="./images/img11.jpg" alt="" className="w-full h-auto" />
                </div>
              </div>
              <div className="cont">
                <div className="info text-gray-600">
                <div className='flex'>
                      <a href="#0" className='font-rubik admin-text'><i>By : Admin</i></a>
                      <a href="#0" className='ml-3 font-rubik date-text'><i>06 Aug 2017</i></a>
                </div>
                  <a href="#0" className="tag bg-gray-300 text-gray-700 px-2 py-1 rounded-lg ml-64 font-rubik wordpress-text">WordPress</a>
                </div>
                <h6 className='mb-3'><a href="#0" className="wordpress-subtitle font-rubik">48 Best WordPress Themes</a></h6>
                  <p className="text2">Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the dummy text ever</p>
                <a href="#0" className="read-more">Read More <i className="fas fa-chevron-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
