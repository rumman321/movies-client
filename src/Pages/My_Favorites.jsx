import React, { useEffect, useState } from 'react';
import { getAllFavorites } from '../Components/utils';

const My_Favorites = () => {
    const [movie,setMovie]=useState([])
    useEffect(()=>{
        const favorites=getAllFavorites()
    },[])
    return (
        <div>
            
        </div>
    );
};

export default My_Favorites;