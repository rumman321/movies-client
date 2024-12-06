import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { addFavorite } from './utils';

const Details = () => {
    const movie=useLoaderData()
    const {poster, title, genre, duration, releaseYear, summary, email }=movie

    // handleFavorite function
    const handleFavorite=(movie)=>{
        addFavorite(movie)
    }
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
  <p className="card-title">Title : {title}</p>
    <div className=' grid grid-cols-1  items-start justify-start gap-3 '>
    <p> Genre : {genre}</p>
    <p> Duration : {duration}minutes</p>
    <p> Release year : {releaseYear}</p>
    <p> Summary : {summary}</p>
    </div>
    
    <div className="card-actions flex gap-5">
      <button className="btn btn-primary">Delete</button>
      <button className="btn btn-primary" onClick={()=>handleFavorite(movie)}>Add Favorite</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Details;