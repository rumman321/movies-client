import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div className='fixed z-20 w-full'>
            <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/" >Home</NavLink >
              </li>
              <li>
                <NavLink to="/allMovies">allMovies</NavLink >
              </li>
              <li>
                <NavLink to="/addMovies">addMovies</NavLink >
              </li>
              <li>
                <NavLink to="/myFavorites">myFavorites</NavLink >
              </li>
              <li>
                <NavLink to="/review">review</NavLink >
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-semibold">Movies-Adventure</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          <li>
                <NavLink to="/" >Home</NavLink >
              </li>
              <li>
                <NavLink to="/allMovies">allMovies</NavLink >
              </li>
              <li>
                <NavLink to="/addMovies">addMovies</NavLink >
              </li>
              <li>
                <NavLink to="/myFavorites">myFavorites</NavLink >
              </li>
              <li>
                <NavLink to="/review">review</NavLink >
              </li>
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          
          {/* <img src={userIcon} alt="" /> */}
          {/* <div className=" ">
          {
            user && user?.email? <div className=" cursor-pointer">
              <img className="w-10 rounded-full" src={user?.photoURL} alt="" />
              <p className="hidden hover:block">{user.displayName}</p>
            </div>
            :
            <img src={userIcon} alt="" />
          }
          
        </div> */}

         {/* btn section */}
          {/* {
          user && user?.email ?
           (<button onClick={logOut} className="btn btn-neutral">Log Out</button>)
          :
          ( <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link >)
        } */}
          <Link to="/login"><button className='btn'>Login</button></Link>
        </div>
      </div>
        </div>
    );
};

export default Navber;