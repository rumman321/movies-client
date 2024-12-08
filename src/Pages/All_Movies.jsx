import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import MovieCard from '../Components/MovieCard';
import AOS from 'aos';
import 'aos/dist/aos.css';

const All_Movies = () => {
    const data = useLoaderData();
    const [Movies, setMovies] = useState(data);
   

    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true
        });
    }, []);

    return (
        <div className='w-11/12 mx-auto pt-20'>
            <h1 data-aos="fade-right">Total Movies: {Movies.length}</h1>
            <div className='grid grid-cols-1 gap-5 lg:grid-cols-3 text-center'>
                {Movies.map(movie => (
                    <div key={movie._id} data-aos="zoom-in">
                        <MovieCard movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default All_Movies;
