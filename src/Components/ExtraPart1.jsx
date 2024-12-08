import React, { useState } from 'react';
import Marquee from 'react-fast-marquee';

const ExtraPart1 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form=e.target
    
     
    setIsModalOpen(true);
    form.reset()
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mt-20">
      <div className="">
        <Marquee className="font-semibold px-12 text-white py-3 bg-red-400">
          <h2 className="ml-10">Which Movie You Want Next !</h2>
          <h2 className="ml-10">Which Movie You Want Next</h2>
          <h2 className="ml-10">Which Movie You Want Next</h2>
          <h2 className="ml-10">Which Movie You Want Next</h2>
          <h2 className="ml-10">Which Movie You Want Next</h2>
        </Marquee>

        <div>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-full">
              <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                <form onSubmit={handleSubmit} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Movie Title</span>
                    </label>
                    <input
                      type="text"
                      name='name'
                      placeholder="Movie title"
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
                      name='email'
                      placeholder="email"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Why You Want This Movie?</span>
                    </label>
                    <input
                      type="text"
                      name='describe'
                      placeholder="please describe"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {isModalOpen && (
          <div className="modal modal-open">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Thank you!</h3>
              <p className="py-4">Your movie suggestion has been submitted.</p>
              <div className="modal-action">
                <button className="btn" onClick={closeModal}>Close</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExtraPart1;
