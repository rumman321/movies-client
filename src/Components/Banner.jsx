import React from 'react';

const Banner = () => {
    return (
        <div className='w-11/12 mx-auto'>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-80">
          <img
            src="https://i.ibb.co.com/SddFMYT/m1.jpg"
            className="w-full h-80"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full h-80">
          <img
            src="https://i.ibb.co.com/fkhdS3y/m2.jpg"
            className="w-full h-80"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-80">
          <img
            src="https://i.ibb.co.com/yn8z2TC/m3.jpg"
            className="w-full h-80"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        
      </div>
    </div>
    );
};

export default Banner;