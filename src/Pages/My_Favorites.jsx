import React, { useEffect, useState } from 'react';
import { getAllFavorites } from '../Components/utils';
import MovieCard from '../Components/MovieCard';
import { useLoaderData } from 'react-router-dom';

const My_Favorites = () => {

    const favorites=useLoaderData()
    
    
    return (
        <div className='pt-32 w-11/12 mx-auto'>
            <h1>favorites movies : {favorites.length}</h1>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 text-center'>
            {/* {
                Movies.map(movie=> <MovieCard key={movie._id} movie={movie}></MovieCard>)
            } */}
           </div>
           
        </div>
    );
};

export default My_Favorites;