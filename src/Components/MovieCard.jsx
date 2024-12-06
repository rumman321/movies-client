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
    <h2 className="card-title">{title}</h2>
    <p>{summary}</p>
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