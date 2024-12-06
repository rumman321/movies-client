import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const {poster, title, genre, duration, releaseYear, summary, email }=useLoaderData()
    return (
        <div className='mx-auto pt-32 flex items-center justify-center'>
            <div className="card bg-base-100 w-96 shadow-xl ">
  <figure className="px-10 pt-10">
    <img
      src={poster}
      alt={title}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <div className='grid grid-cols-2 gap-5'>
    <h2 className="card-title">{title}</h2>
    <p>{genre}</p>
    <p>{duration}minutes</p>
    <p>{releaseYear}</p>
    </div>
    <p>{summary}</p>
    <div className="card-actions flex gap-5">
      <button className="btn btn-primary">Delete</button>
      <button className="btn btn-primary">Add Favorite</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;