import React from 'react';

const MovieCard = ({movie}) => {
    const { poster, title, genre, duration, releaseYear, summary, email } = movie
    return (
        <div className='mx-auto'>
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
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default MovieCard;