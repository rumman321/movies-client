import React, { useEffect, useState } from 'react';
import { getAllFavorites } from '../Components/utils';
import MovieCard from '../Components/MovieCard';
import { useLoaderData } from 'react-router-dom';
import FavCard from '../Components/FavCard';

const My_Favorites = () => {

    const data=useLoaderData()
    const [favorites,setfavorites]=useState(data)
    
    
    return (
        <div className='pt-32 w-11/12 mx-auto'>
            <h1>favorites movies : {favorites.length}</h1>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 text-center'>
            {
                favorites.map(favorite=> <FavCard key={favorite._id} favorite={favorite} setfavorites={setfavorites} favorites={favorites}></FavCard>)
            }
           </div>
           
        </div>
    );
};

export default My_Favorites;