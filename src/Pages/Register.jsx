import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {

    const [error,setError]=useState({})
    const navigate=useNavigate()

    const handleSubmit=(e)=>{
        e.preventDefault()
        const form= new FormData(e.target)
        const name=form.get("name")
        const photo=form.get("photo")
        const email=form.get("email")
        const password=form.get("password")
        console.log(name,photo,email,password)
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if(!passwordRegex.test(password)){
            setError( { ...error, pass: `password Must have an Uppercase letter a Lowercase & Length must be at least 6 character`})
            return
        }
    }
    return (
        <div className='pt-32 text-center'>
            <div className="min-h-screen flex justify-center items-center">
          
      <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center">Register your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
            name="name"
              type="text"
              placeholder="Name"
              className="input input-bordered"
              required
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="Photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />

            {error.pass && <label className="label text-red-600 text-sm">{error.pass}</label>}
           
            
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <br />
        
        <p className="text-center font-semibold">
          Already have an account ?{" "}
          <Link className="text-red-600" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
        </div>
    );
};

export default Register;