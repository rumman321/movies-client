import React from 'react';
import Marquee from 'react-fast-marquee';

const ExtraPart1 = () => {
    return (
        <div className=" mt-20">
        <div className="">
          <Marquee className=" font-semibold px-12 text-white py-3 bg-red-400">
            <h2 className="ml-10">Which Movie You Want Next !</h2>
            <h2 className="ml-10">Which Movie You Want Next</h2>
            <h2 className="ml-10">Which Movie You Want Next</h2>
            <h2 className="ml-10">Which Movie You Want Next</h2>
            <h2 className="ml-10">Which Movie You Want Next</h2>
          </Marquee>
  
          <div>
            <div className="hero bg-base-200 min-h-screen">
              <div className="hero-content flex-col lg:flex-row-reverse w-full">
               
                <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                  <form className="card-body">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Movie Title</span>
                      </label>
                      <input
                        type="text"
                        placeholder=" Movie title"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        type="email"
                        placeholder="email"
                        className="input input-bordered"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Why You Want This Movie ?</span>
                      </label>
                      <input
                        type="text"
                        placeholder="please describe"
                        className="input input-bordered"
                        required
                      />
                     
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn btn-primary">submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    );
};

export default ExtraPart1;