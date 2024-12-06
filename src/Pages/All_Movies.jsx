import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';

const All_Movies = () => {
    const Movies=useLoaderData()
    return (
        <div className='w-11/12 mx-auto pt-20'>
             <h1>total movies : {Movies.length}</h1>
             <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 text-center'>
            {
                Movies.map(movie=> <MovieCard key={movie._id} movie={movie}></MovieCard>)
            }
           </div>
        </div>
    );
};

export default All_Movies;