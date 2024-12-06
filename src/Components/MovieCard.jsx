import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieCard = ({movie}) => {
    const { poster, title, genre, duration, releaseYear, summary, email,_id } = movie
    return (
        <div className='mx-auto pt-20'>
            <div className="card bg-base-100 w-96 shadow-xl ">
  <figure className="px-10 pt-10">
    <img
      src={poster}
      alt={title}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <p className="card-title">Title : {title}</p>
    <div className=' grid grid-cols-1  items-start justify-start gap-3 '>
    <p> Genre : {genre}</p>
    <p> Duration : {duration}minutes</p>
    <p> Release year : {releaseYear}</p>
    {/* <p> Summary : {summary}</p> */}
    </div>
    <div className="card-actions">
      <NavLink to={`/details/${_id}`}>
      <button className="btn btn-primary">See Details</button>
      </NavLink>
    </div>
  </div>
</div>
        </div>
    );
};

export default MovieCard;