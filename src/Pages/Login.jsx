import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        const form = new FormData(e.target);
        const email = form.get("email");
        const password = form.get("password");

        console.log(email,password)
    }
    return (
        <div className='pt-32 text-center'>
             <div className="min-h-screen flex justify-center items-center">
      
      <div className="card bg-base-100 w-full max-w-lg p-10 shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl text-center">Login your account</h2>
        <form onSubmit={handleSubmit} className="card-body">
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
            {/* {error.login && <label className="label text-red-600">{error.login}</label>} */}
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don't have an account ?{" "}
          <Link className="text-red-600" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
        </div>
    );
};

export default Login;